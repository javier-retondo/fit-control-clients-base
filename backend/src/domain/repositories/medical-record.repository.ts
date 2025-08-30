import { MedicalRecord, MedicalRecordDto } from '../entities';
import { IBaseRepository } from '../interfaces';

export interface MedicalRecordRepository extends IBaseRepository<MedicalRecord, MedicalRecordDto> {}
