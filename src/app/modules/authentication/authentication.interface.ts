interface Note {
  title: string;
  description: string;
}




export type ISignup = {
  name: string;
    email: string;
    password: string;
    notes: Array<Note>;
  };
  
//   export type ILoginUserResponse = {
//     accessToken: string;
//     refreshToken?: string;
//     isEmailVerified?: boolean;
//   };
  
//   export type IRefreshTokenResponse = {
//     accessToken: string;
//   };
  
//   export type IChangePassword = {
//     oldPassord: string;
//     newPassword: string;
//   };
  