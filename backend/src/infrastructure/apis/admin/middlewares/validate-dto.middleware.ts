import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { Responses } from '../../../utils';

export class ValidateDtoMiddleware {
   constructor(public responses: Responses = new Responses()) {}
   validationMiddleware(
      type: any,
      target: 'body' | 'query' | 'params',
   ): (req: Request, res: Response, next: NextFunction) => Promise<void> {
      return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
         const errors: {
            target: 'body' | 'query' | 'params';
            error: {
               property: string;
               constraints: any;
            }[];
         }[] = [];
         if (target === 'body') {
            const dto: typeof type = plainToInstance(type, req.body);
            const bodyErrors = await validate(dto);
            if (bodyErrors.length > 0) {
               errors.push({
                  target: 'body',
                  error: bodyErrors.map((err) => {
                     function getChildrenErrors(children: any, property: string) {
                        return children.map((child: any) => {
                           if (child.constraints) {
                              return {
                                 property: property + '/' + child.property,
                                 constraints: child.constraints,
                              };
                           }
                           return (
                              child.children &&
                              getChildrenErrors(
                                 child.children,
                                 property + '/' + child.property,
                              ).flat()
                           );
                        });
                     }

                     return {
                        property: err.property,
                        constraints: err.constraints,
                        children:
                           err.children && getChildrenErrors(err.children, err.property).flat(),
                     };
                  }),
               });
            }
            req.body = dto;
         }
         if (target === 'query') {
            const dto: typeof type = plainToInstance(type, req.query);
            const queryErrors = await validate(dto);
            if (queryErrors.length > 0)
               errors.push({
                  target: 'query',
                  error: queryErrors.map((err) => {
                     return {
                        property: err.property,
                        constraints: err.constraints,
                     };
                  }),
               });

            req.query = dto;
         }
         if (target === 'params') {
            const dto: typeof type = plainToInstance(type, req.params);
            const paramsErrors = await validate(dto);
            if (paramsErrors.length > 0)
               errors.push({
                  target: 'params',
                  error: paramsErrors.map((err) => {
                     return {
                        property: err.property,
                        constraints: err.constraints,
                     };
                  }),
               });

            req.params = dto;
         }
         if (errors.length > 0) {
            this.responses.error({ req, res, data: errors, status: 400 });
         } else {
            next();
         }
      };
   }
}
