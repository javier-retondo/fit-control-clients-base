export class Dates {
   private constructor(
      private readonly startDate: Date,
      private readonly endDate: Date,
   ) {}

   static create(startDate: Date, endDate: Date): Dates {
      this.validateDates(startDate, endDate);
      return new Dates(startDate, endDate);
   }

   getStartDate(): Date {
      return this.startDate;
   }

   getEndDate(): Date {
      return this.endDate;
   }

   private static validateDates(startDate: Date, endDate: Date): void {
      if (startDate > endDate) {
         throw new Error('Invalid date range');
      }
   }
}
