import { User } from '../models/User';

export interface IRegistrationService {
    registerUser(userData: User): Promise<User>;
    validateUserData(userData: User): Promise<boolean>;
    checkEmailExists(email: string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
} 