import { Headquarter, HeadquarterDto, HeadquarterRepository } from '../../../../domain';
import { IdGenerator, UseCaseCommandInterface } from '../../../interfaces';
import { CreateHeadquarterRequest } from './request.dto';

export class CreateHeadquarterHandler
   implements UseCaseCommandInterface<CreateHeadquarterRequest, HeadquarterDto>
{
   constructor(
      private readonly headquerterRepository: HeadquarterRepository,
      private readonly idGenerator: IdGenerator,
   ) {}

   async execute(request: any): Promise<HeadquarterDto> {
      const { name, location, capacity, description, imageUrl } = request;

      const newHeadquarter = Headquarter.create({
         id: this.idGenerator.generate(),
         name,
         location,
         capacity,
         description,
         imageUrl,
      });

      const createdHeadquarter = await this.headquerterRepository.save(newHeadquarter);

      return createdHeadquarter.get();
   }
}
