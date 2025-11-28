export interface IPasswordRandomGeneratorService {
   generate(
      length: number,
      lowercase: boolean,
      uppercase: boolean,
      numbers: boolean,
      symbols: boolean,
   ): string;
}
