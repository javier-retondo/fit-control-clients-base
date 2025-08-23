import { v4 as uuid } from 'uuid';
import { BloodGroup } from '../../enums';
import { MedicalRecordDto } from './medical-record.dto';

export class MedicalRecord {
   private id: string;
   private partnerId: string;
   private bloodGroup: BloodGroup;
   private allergies: string;
   private medications: string;
   private injuries: string;
   private restrictions: string;
   private observations: string;
   private createdAt: Date;
   private updatedAt: Date;

   private constructor(medicalRecord: MedicalRecordDto) {
      this.id = medicalRecord.id || uuid();
      this.partnerId = medicalRecord.partnerId;
      this.bloodGroup = medicalRecord.bloodGroup;
      this.allergies = medicalRecord.allergies;
      this.medications = medicalRecord.medications;
      this.injuries = medicalRecord.injuries;
      this.restrictions = medicalRecord.restrictions;
      this.observations = medicalRecord.observations;
      this.createdAt = medicalRecord.createdAt || new Date();
      this.updatedAt = medicalRecord.updatedAt || new Date();
   }

   static create(medicalRecord: MedicalRecordDto): MedicalRecord {
      return new MedicalRecord(medicalRecord);
   }

   static rebuild(medicalRecord: MedicalRecordDto): MedicalRecord {
      return new MedicalRecord(medicalRecord);
   }

   get(): MedicalRecordDto {
      return {
         id: this.id,
         partnerId: this.partnerId,
         bloodGroup: this.bloodGroup,
         allergies: this.allergies,
         medications: this.medications,
         injuries: this.injuries,
         restrictions: this.restrictions,
         observations: this.observations,
         createdAt: this.createdAt,
         updatedAt: this.updatedAt,
      };
   }

   update(medicalRecord: MedicalRecordDto): void {
      this.partnerId = medicalRecord.partnerId;
      this.bloodGroup = medicalRecord.bloodGroup;
      this.allergies = medicalRecord.allergies;
      this.medications = medicalRecord.medications;
      this.injuries = medicalRecord.injuries;
      this.restrictions = medicalRecord.restrictions;
      this.observations = medicalRecord.observations;
      this.createdAt = medicalRecord.createdAt || new Date();
      this.updatedAt = medicalRecord.updatedAt || new Date();
   }
}
