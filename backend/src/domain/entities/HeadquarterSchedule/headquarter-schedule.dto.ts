import { WeekDay } from '../../enums';

export interface HeadquarterScheduleDTO {
   id?: string;
   headquarterId: string;
   startHour: Date;
   endHour: Date;
   weekDay: WeekDay;
   holiday: boolean;
}
