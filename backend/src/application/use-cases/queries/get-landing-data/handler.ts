import {
   IHeadquarterScheduleRepository,
   IPlanRepository,
   Status,
   IWorkoutRepository,
} from '../../../../domain';
import { UseCaseQuery, IGymConfiguration } from '../../../interfaces';
import { GetLandingDataResponse } from './response.dto';

export class GetLandingDataHandler implements UseCaseQuery<undefined, GetLandingDataResponse> {
   constructor(
      private readonly workoutRepository: IWorkoutRepository,
      private readonly headquarterScheduleRepository: IHeadquarterScheduleRepository,
      private readonly plansRepository: IPlanRepository,
      private readonly baseConfig: IGymConfiguration,
   ) {}
   async execute(): Promise<GetLandingDataResponse> {
      const workouts = await this.workoutRepository.findAll({ where: { enabled: true } });
      const headquarters = await this.headquarterScheduleRepository.findAll({
         where: {
            headquarter: { status: Status.ACTIVE },
         },
      });
      const plans = await this.plansRepository.findAll({
         where: {
            status: Status.ACTIVE,
            startDate: { gte: new Date() },
            endDate: { lte: new Date() },
         },
      });

      return {
         ...this.baseConfig,
         landing: {
            ...this.baseConfig.landing,
            classes: workouts.data.map((workout) => ({
               name: workout.get().name,
               description: workout.get().description,
               image: workout.get().imageUrl || '/img/default-class.webp',
            })),
            locations: headquarters.data.map((headquarter) => ({
               name: headquarter.get().headquarter.name,
               address: headquarter.get().headquarter.location,
               schedule: this.formatScheduleEntry({
                  weekDay: headquarter.get().weekDay,
                  startHour: headquarter.get().startHour,
                  endHour: headquarter.get().endHour,
                  holiday: headquarter.get().holiday,
               }),
               image: headquarter.get().headquarter.imageUrl || '/img/default-location.webp',
            })),
            plans: plans.data.map((plan) => ({
               name: plan.get().name,
               price: `$${plan.get().amount.toFixed(2)}`,
               description: plan.get().description,
               benefits: plan.get().benefits,
               featured: plan.get().featured,
            })),
         },
      };
   }

   private formatScheduleEntry(entry: {
      weekDay: string;
      startHour: Date;
      endHour: Date;
      holiday: boolean;
   }): string {
      if (entry.holiday) {
         return `${entry.weekDay}: Cerrado por feriado`;
      }
      const start = entry.startHour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const end = entry.endHour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `${entry.weekDay}: ${start} - ${end}`;
   }
}
