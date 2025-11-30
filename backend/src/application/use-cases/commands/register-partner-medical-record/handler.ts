import { MedicalRecord, MedicalRecordDto, IMedicalRecordRepository } from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { RegisterPartnerMedicalRecordRequest } from './request.dto';

export class RegisterPartnerMedicalRecordHandler
   implements UseCaseCommandInterface<RegisterPartnerMedicalRecordRequest, MedicalRecordDto>
{
   constructor(
      private readonly medicalRecord: IMedicalRecordRepository,
      private readonly idGenerator: IdGenerator,
   ) {}

   async execute(request: RegisterPartnerMedicalRecordRequest): Promise<MedicalRecordDto> {
      const {
         partnerId,
         allergies,
         medications,
         bloodGroup,
         injuries,
         restrictions,
         observations,
      } = request;

      const newMedicalRecord = MedicalRecord.create({
         id: this.idGenerator.generate(),
         partnerId,
         allergies,
         medications,
         bloodGroup,
         injuries,
         restrictions,
         observations,
      });

      const createdMedicalRecord = await this.medicalRecord.save(newMedicalRecord);

      return createdMedicalRecord.get();
   }
}
