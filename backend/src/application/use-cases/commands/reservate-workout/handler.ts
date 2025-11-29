import {
   Reservation,
   ReservationDto,
   ReservationRepository,
   UserRepository,
   WorkoutScheduleRepository,
} from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { ReservateWorkoutRequest } from './request.dto';

export class ReservateWorkoutHandler
   implements UseCaseCommandInterface<ReservateWorkoutRequest, ReservationDto>
{
   constructor(
      private readonly userRepository: UserRepository,
      private readonly workoutScheduleRepository: WorkoutScheduleRepository,
      private readonly reservationRepository: ReservationRepository,
      private readonly idGenerator: IdGenerator,
   ) {}
   async execute(request: ReservateWorkoutRequest): Promise<ReservationDto> {
      const { workoutScheduleId, partnerId } = request;

      const partner = await this.userRepository.findById(partnerId);
      if (!partner) {
         throw new Error('Partner not found');
      }

      const workoutSchedule = await this.workoutScheduleRepository.findById(workoutScheduleId);
      if (!workoutSchedule) {
         throw new Error('Workout schedule not found');
      }

      const newReservation = Reservation.create({
         id: this.idGenerator.generate(),
         partner: partner.get(),
         workoutSchedule: workoutSchedule.get(),
      });

      await this.reservationRepository.save(newReservation);

      return newReservation.get();
   }
}
