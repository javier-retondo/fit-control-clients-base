import {
   IHeadquarterRepository,
   Roles,
   IUserRepository,
   IWorkoutRepository,
   WorkoutSchedule,
   WorkoutScheduleDto,
   IWorkoutScheduleRepository,
} from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { RegisterWorkoutScheduleRequest } from './request.dto';

export class RegisterWorkoutScheduleHandler
   implements UseCaseCommandInterface<RegisterWorkoutScheduleRequest, WorkoutScheduleDto[]>
{
   constructor(
      private readonly workoutScheduleRepository: IWorkoutScheduleRepository,
      private readonly workoutRepository: IWorkoutRepository,
      private readonly userRepository: IUserRepository,
      private readonly headquarterRepository: IHeadquarterRepository,
      private readonly idGenerator: IdGenerator,
   ) {}
   async execute(request: RegisterWorkoutScheduleRequest): Promise<WorkoutScheduleDto[]> {
      const { instructorId, headquarterId, workoutId, schedules } = request;
      const instructor = await this.userRepository.findById(instructorId);
      if (!instructor) {
         throw new Error('Instructor not found');
      }
      if (instructor.get().role !== Roles.INSTRUCTOR) {
         throw new Error('User is not an instructor');
      }
      const headquarter = await this.headquarterRepository.findById(headquarterId);
      if (!headquarter) {
         throw new Error('Headquarter not found');
      }
      const workout = await this.workoutRepository.findById(workoutId);
      if (!workout) {
         throw new Error('Workout not found');
      }
      const workoutSchedules = schedules.map((schedule) => {
         const workoutSchedule = WorkoutSchedule.create({
            id: this.idGenerator.generate(),
            instructor: instructor.get(),
            headquarter: headquarter.get(),
            workout: workout.get(),
            weekDay: schedule.weekDay,
            startTime: schedule.startTime,
            endTime: schedule.endTime,
         });
         return this.workoutScheduleRepository.save(workoutSchedule).then((ws) => ws.get());
      });
      return Promise.all(workoutSchedules);
   }
}
