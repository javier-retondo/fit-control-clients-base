import { BloodGroup } from '../../enums';

export interface MedicalRecordDto {
   id?: string;
   partnerId: string;
   bloodGroup: BloodGroup;
   allergies: string;
   medications: string;
   injuries: string;
   restrictions: string;
   observations: string;
   createdAt: Date;
   updatedAt: Date;
}
