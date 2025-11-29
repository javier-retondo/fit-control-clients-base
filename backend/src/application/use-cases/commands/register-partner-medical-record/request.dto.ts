import { BloodGroup } from '../../../../domain';

export interface RegisterPartnerMedicalRecordRequest {
   partnerId: string;
   bloodGroup: BloodGroup;
   allergies: string;
   medications: string;
   injuries: string;
   restrictions: string;
   observations: string;
}
