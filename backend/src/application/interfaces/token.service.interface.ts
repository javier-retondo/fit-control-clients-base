export interface TokenService {
   generateToken(payload: object, expiresIn?: string | number): string;
}
