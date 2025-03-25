import { RegistrationService } from './services/RegistrationService';
import { User } from './models/User';

async function testRegistration() {
    const registrationService = new RegistrationService();
    
    const testUser: User = {
        firstName: 'María',
        lastName: 'García',
        email: 'maria.garcia@ejemplo.com',
        password: 'contraseña123',
        phoneNumber: '+34612345678',
        dateOfBirth: new Date('1995-05-15'),
        address: {
            street: 'Calle Principal 123',
            city: 'Madrid',
            country: 'España',
            postalCode: '28001'
        }
    };

    try {
        console.log('Probando registro de usuario...');
        const registeredUser = await registrationService.registerUser(testUser);
        console.log('Usuario registrado exitosamente:', {
            ...registeredUser,
            password: '[HASHED]' // No mostramos la contraseña por seguridad
        });
    } catch (error) {
        console.error('Error en el registro:', error);
    }
}

testRegistration(); 