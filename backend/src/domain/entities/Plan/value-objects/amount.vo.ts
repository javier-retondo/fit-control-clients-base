export class Amount {
   private constructor(private readonly value: number) {}

   static create(value: number): Amount {
      if (value < 0) {
         throw new Error('Invalid amount value');
      }
      return new Amount(value);
   }

   getValue(): number {
      return this.value;
   }
}
