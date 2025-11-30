import { MedicalRecord, MedicalRecordDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface IMedicalRecordRepository
   extends IBaseRepository<MedicalRecord, MedicalRecordDto> {}
