export interface PasswordHashService {
   secret: string;
   hash(password: string): Promise<string>;
   compare(password: string, hashedPassword: string): Promise<boolean>;
}
