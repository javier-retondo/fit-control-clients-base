export interface ISessionData {
   token: string;
   user: {
      id: number;
      email: string;
      name: string;
   };
}
