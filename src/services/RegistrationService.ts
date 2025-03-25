import { User, UserModel } from '../models/User';
import { IRegistrationService } from '../interfaces/IRegistrationService';
import * as bcrypt from 'bcrypt';

export class RegistrationService implements IRegistrationService {
    private readonly SALT_ROUNDS = 10;

    async registerUser(userData: User): Promise<User> {
        // This is a placeholder implementation
        // In a real application, this would interact with a database
        const user = new UserModel(userData);
        
        if (!user.validate()) {
            throw new Error('Invalid user data');
        }

        // Hash the password
        user.password = await this.hashPassword(user.password);

        // Here you would typically save to database
        // For now, we'll just return the user object
        return user;
    }

    async validateUserData(userData: User): Promise<boolean> {
        const user = new UserModel(userData);
        return user.validate();
    }

    async checkEmailExists(email: string): Promise<boolean> {
        // This is a placeholder implementation
        // In a real application, this would check against a database
        return false;
    }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.SALT_ROUNDS);
    }
} 