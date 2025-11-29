import {
   HeadquarterRepository,
   HeadquarterSchedule,
   HeadquarterScheduleDTO,
   HeadquarterScheduleRepository,
} from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { CreateHeadquarterScheduleRequest } from './request.dto';

export class CreateHeadquarterHandler
   implements UseCaseCommandInterface<CreateHeadquarterScheduleRequest, HeadquarterScheduleDTO>
{
   constructor(
      private readonly headquarterScheduleRepository: HeadquarterScheduleRepository,
      private readonly headquarterRepository: HeadquarterRepository,
      private readonly idGenerator: IdGenerator,
   ) {}

   async execute(request: CreateHeadquarterScheduleRequest): Promise<HeadquarterScheduleDTO> {
      const { headquarterId, startHour, endHour, weekDay, holiday } = request;
      const headquarter = await this.headquarterRepository.findById(headquarterId);
      if (!headquarter) {
         throw new Error('Headquarter not found');
      }
      const newHeadquarterSchedule = HeadquarterSchedule.create({
         id: this.idGenerator.generate(),
         headquarter: headquarter.get(),
         startHour,
         endHour,
         weekDay,
         holiday,
      });

      const createdHeadquarterSchedule =
         await this.headquarterScheduleRepository.save(newHeadquarterSchedule);

      return createdHeadquarterSchedule.get();
   }
}
