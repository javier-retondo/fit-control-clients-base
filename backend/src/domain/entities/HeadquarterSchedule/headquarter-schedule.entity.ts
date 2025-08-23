import { v4 as uuid } from 'uuid';
import { WeekDay } from '../../enums';
import { HeadquarterScheduleDTO } from './headquarter-schedule.dto';

export class HeadquarterSchedule {
   private id: string;
   private headquarterId: string;
   private startHour: Date;
   private endHour: Date;
   private weekDay: WeekDay;
   private holiday: boolean;

   private constructor(headquarterWorkoutSchedule: HeadquarterScheduleDTO) {
      this.id = headquarterWorkoutSchedule.id || uuid();
      this.headquarterId = headquarterWorkoutSchedule.headquarterId;
      this.startHour = headquarterWorkoutSchedule.startHour;
      this.endHour = headquarterWorkoutSchedule.endHour;
      this.weekDay = headquarterWorkoutSchedule.weekDay;
      this.holiday = headquarterWorkoutSchedule.holiday;
   }

   static create(headquarterWorkoutSchedule: HeadquarterScheduleDTO) {
      return new HeadquarterSchedule(headquarterWorkoutSchedule);
   }

   static rebuild(headquarterWorkoutSchedule: HeadquarterScheduleDTO) {
      return new HeadquarterSchedule(headquarterWorkoutSchedule);
   }

   get(): HeadquarterScheduleDTO {
      return {
         id: this.id,
         headquarterId: this.headquarterId,
         startHour: this.startHour,
         endHour: this.endHour,
         weekDay: this.weekDay,
         holiday: this.holiday,
      };
   }

   update(headquarterWorkoutSchedule: HeadquarterScheduleDTO) {
      this.headquarterId = headquarterWorkoutSchedule.headquarterId;
      this.startHour = headquarterWorkoutSchedule.startHour;
      this.endHour = headquarterWorkoutSchedule.endHour;
      this.weekDay = headquarterWorkoutSchedule.weekDay;
      this.holiday = headquarterWorkoutSchedule.holiday;
   }
}
