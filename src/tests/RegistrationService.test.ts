import { RegistrationService } from '../services/RegistrationService';
import { User } from '../models/User';

describe('RegistrationService', () => {
    let registrationService: RegistrationService;

    beforeEach(() => {
        registrationService = new RegistrationService();
    });

    const mockUser: User = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        phoneNumber: '+1234567890',
        dateOfBirth: new Date('1990-01-01'),
        address: {
            street: '123 Main St',
            city: 'New York',
            country: 'USA',
            postalCode: '10001'
        }
    };

    test('should validate user data correctly', async () => {
        const isValid = await registrationService.validateUserData(mockUser);
        expect(isValid).toBe(true);
    });

    test('should hash password', async () => {
        const hashedPassword = await registrationService.hashPassword('testPassword');
        expect(hashedPassword).not.toBe('testPassword');
        expect(hashedPassword.length).toBeGreaterThan(0);
    });

    test('should register user with valid data', async () => {
        const registeredUser = await registrationService.registerUser(mockUser);
        expect(registeredUser).toBeDefined();
        expect(registeredUser.email).toBe(mockUser.email);
        expect(registeredUser.password).not.toBe(mockUser.password); // Password should be hashed
    });
}); 