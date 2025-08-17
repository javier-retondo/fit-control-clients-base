import { IsEmail, IsString } from 'class-validator';

export class UserCreateDto {
   @IsString()
   nombre: string;

   @IsString()
   apellido: string;

   @IsEmail()
   email: string;

   @IsString()
   dni: string;

   constructor(data: UserCreateDto) {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.email = data.email;
      this.dni = data.dni;
   }
}
