import { WorkoutScheduleDto } from './workout-schedule.dto';
import { WeekDay } from '../../enums';

export class WorkoutSchedule {
   private id: string;
   private partnerId: string;
   private instructorId: string;
   private weekDay: WeekDay;
   private startTime: Date;
   private endTime: Date;
   private headquarterId: string;

   private constructor(workoutSchedule: WorkoutScheduleDto) {
      this.id = workoutSchedule.id;
      this.partnerId = workoutSchedule.partnerId;
      this.instructorId = workoutSchedule.instructorId;
      this.weekDay = workoutSchedule.weekDay;
      this.startTime = new Date(workoutSchedule.startTime);
      this.endTime = new Date(workoutSchedule.endTime);
      this.headquarterId = workoutSchedule.headquarterId;
   }

   static create(workoutSchedule: WorkoutScheduleDto): WorkoutSchedule {
      return new WorkoutSchedule(workoutSchedule);
   }

   static rebuild(workoutSchedule: WorkoutScheduleDto): WorkoutSchedule {
      return new WorkoutSchedule(workoutSchedule);
   }

   get(): WorkoutScheduleDto {
      return {
         id: this.id,
         partnerId: this.partnerId,
         instructorId: this.instructorId,
         weekDay: this.weekDay,
         startTime: this.startTime,
         endTime: this.endTime,
         headquarterId: this.headquarterId,
      };
   }

   update(workoutSchedule: WorkoutScheduleDto): void {
      this.partnerId = workoutSchedule.partnerId;
      this.instructorId = workoutSchedule.instructorId;
      this.weekDay = workoutSchedule.weekDay;
      this.startTime = new Date(workoutSchedule.startTime);
      this.endTime = new Date(workoutSchedule.endTime);
      this.headquarterId = workoutSchedule.headquarterId;
   }
}
