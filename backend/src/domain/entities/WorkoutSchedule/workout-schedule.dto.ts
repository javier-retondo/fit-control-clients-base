import { WeekDay } from '../../enums';

export interface WorkoutScheduleDto {
   id: string;
   partnerId: string;
   instructorId: string;
   weekDay: WeekDay;
   startTime: Date;
   endTime: Date;
   headquarterId: string;
}
