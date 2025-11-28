import { WeekDay } from '../../enums';
import { HeadquarterDto } from '../Headquarter/headquarter.dto';

export interface HeadquarterScheduleDTO {
   id: string;
   headquarter: HeadquarterDto;
   startHour: Date;
   endHour: Date;
   weekDay: WeekDay;
   holiday: boolean;
}
