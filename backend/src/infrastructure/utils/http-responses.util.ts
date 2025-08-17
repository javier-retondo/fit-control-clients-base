import fs from 'fs';
import { Request, Response } from 'express';
import { ILog, ISessionData } from '../interfaces';
import { getLocationFromIP } from './get-location-ip.utils';
import { LOG_TYPES } from '../enums';
import { IHttpResponses } from '../interfaces';

export class Responses implements IHttpResponses {
   success<T extends object | Array<object>>(props: {
      req: Request;
      res: Response;
      status?: number;
      data?: T;
      pagination?: { page: number; limit: number; total: number };
   }) {
      const { pagination, data, status } = props;
      if (pagination && Array.isArray(data)) {
         const { page, limit, total } = pagination;

         const totalPages = Math.ceil(total / limit);

         let nextPage: number | null = page + 1;
         if (nextPage > totalPages) {
            nextPage = null;
         }
         let previousPage: number | null = page - 1;
         if (previousPage < 1) {
            previousPage = null;
         }

         props.res.status(status || 200).send({
            error: false,
            status: status || 200,
            body: data || '',
            pagination: {
               totalCount: total,
               pageCount: data?.length,
               currentPage: page,
               totalPages: Math.ceil(total / limit),
               previousPage: previousPage,
               nextPage: nextPage,
            },
         });
      } else {
         props.res.status(status || 200).send({
            error: false,
            status: status || 200,
            body: data || '',
         });
      }
   }

   async error(props: { req: Request; res: Response; status?: number; data?: any }) {
      const { req, data, status } = props;
      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      const statusCode = status || 500;

      if (statusCode === 500) {
         const address = ip ? await getLocationFromIP(ip.toString()) : null;
         const userData: ISessionData = req.body.userData;
         const {
            user: { id },
         } = userData;
         const errorLog: ILog = {
            id: undefined,
            dateTime: new Date(),
            userId: id,
            type: LOG_TYPES.ERROR,
            description: data?.message || 'Error desconocido',
            endpoint: req.originalUrl,
            method: req.method,
            stackTrace: data?.stack,
            sql: data?.sql,
            address: address?.query,
         };

         try {
            console.log('errorLog :>> ', errorLog);
            //  TODO: save in repository
         } catch (dbError: any) {
            console.error('❌ Error guardando log en BD:', dbError.message);
         }
      }

      console.error('--------------------> ERROR <--------------------');
      console.error('Error: ', data);
      console.error('Route: ', req.originalUrl);
      console.error('Method: ', req.method);
      console.error('IP: ', ip);
      console.error('-------------------------------------------------');

      const message = data?.message || 'Error interno del servidor';

      props.res.status(statusCode).json({
         error: true,
         status: statusCode,
         body: statusCode === 500 ? message : data || '',
      });
   }

   file(props: {
      req: Request;
      res: Response;
      filePath: string;
      contentType: string;
      fileName: string;
      data?: object;
   }) {
      const { res, filePath, contentType, fileName, data } = props;
      const file = fs.createReadStream(filePath);
      const stat = fs.statSync(filePath);
      if (data) res.setHeader('dataJson', JSON.stringify(data));
      res.setHeader('Content-Length', stat.size);
      res.setHeader('Content-Type', contentType);
      res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
      file.pipe(res);
   }
}
