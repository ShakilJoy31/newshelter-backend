import {
    ISignup,
} from './authentication.interface';
import { AuthenticationModel } from './authentication.model';

// login signup
const userSignupService = async (payload:ISignup) :Promise<ISignup> => {
    const result = await AuthenticationModel.create(payload);
    return result
}


const userLoginService = async (email: string, password: string) => { 
    const isUserExist = await AuthenticationModel.findOne({ email: email });
    if (!isUserExist) {
      throw new Error('User is not here.');
    } else {
        console.log('UserExist', isUserExist);
        return isUserExist;
    }
}

export const AuthService = {
  userSignupService,
  userLoginService
};
