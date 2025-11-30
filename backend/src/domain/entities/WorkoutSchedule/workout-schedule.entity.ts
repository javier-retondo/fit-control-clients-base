import { WorkoutScheduleDto } from './workout-schedule.dto';
import { WeekDay } from '../../enums';
import { Headquarter } from '../Headquarter';
import { User } from '../User';
import { Workout } from '../Workout/workout.entity';
import { Reservation } from '../Reservation';

export class WorkoutSchedule {
   private id: string;
   private instructor: User;
   private weekDay: WeekDay;
   private startTime: Date;
   private endTime: Date;
   private headquarter: Headquarter;
   private workout: Workout;
   private reservations?: Reservation[];

   private constructor(workoutSchedule: WorkoutScheduleDto) {
      this.id = workoutSchedule.id;
      this.instructor = User.rebuild(workoutSchedule.instructor);
      this.weekDay = workoutSchedule.weekDay;
      this.startTime = new Date(workoutSchedule.startTime);
      this.endTime = new Date(workoutSchedule.endTime);
      this.headquarter = Headquarter.rebuild(workoutSchedule.headquarter);
      this.workout = Workout.rebuild(workoutSchedule.workout);
      if (workoutSchedule.reservations) {
         this.reservations = workoutSchedule.reservations.map((reservation) =>
            Reservation.rebuild(reservation),
         );
      }
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
         instructor: this.instructor.get(),
         weekDay: this.weekDay,
         startTime: this.startTime,
         endTime: this.endTime,
         headquarter: this.headquarter.get(),
         workout: this.workout.get(),
         reservations: this.reservations
            ? this.reservations.map((reservation) => reservation.get())
            : undefined,
      };
   }

   update(workoutSchedule: WorkoutScheduleDto): void {
      this.instructor = User.rebuild(workoutSchedule.instructor);
      this.weekDay = workoutSchedule.weekDay;
      this.startTime = new Date(workoutSchedule.startTime);
      this.endTime = new Date(workoutSchedule.endTime);
      this.headquarter = Headquarter.rebuild(workoutSchedule.headquarter);
      this.workout = Workout.rebuild(workoutSchedule.workout);
      if (workoutSchedule.reservations) {
         this.reservations = workoutSchedule.reservations.map((reservation) =>
            Reservation.rebuild(reservation),
         );
      }
   }
}
