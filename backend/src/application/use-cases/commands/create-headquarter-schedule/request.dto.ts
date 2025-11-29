import { WeekDay } from '../../../../domain';

export interface CreateHeadquarterScheduleRequest {
   headquarterId: string;
   startHour: Date;
   endHour: Date;
   weekDay: WeekDay;
   holiday: boolean;
}
