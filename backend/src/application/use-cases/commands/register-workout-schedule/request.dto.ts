import { WeekDay } from '../../../../domain';

export interface RegisterWorkoutScheduleRequest {
   instructorId: string;
   headquarterId: string;
   workoutId: string;
   schedules: {
      weekDay: WeekDay;
      startTime: Date;
      endTime: Date;
   }[];
}
