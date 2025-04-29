export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    dateOfBirth: Date;
    address: {
        street: string;
        city: string;
        country: string;
        postalCode: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

export class UserModel implements User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    dateOfBirth: Date;
    address: {
        street: string;
        city: string;
        country: string;
        postalCode: string;
    };
    createdAt?: Date;
    updatedAt?: Date;

    constructor(userData: User) {
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.email = userData.email;
        this.password = userData.password;
        this.phoneNumber = userData.phoneNumber;
        this.dateOfBirth = userData.dateOfBirth;
        this.address = userData.address;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    validate(): boolean {
        // Basic validation rules
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[\d\s-]{10,}$/;

        return (
            this.firstName.length > 0 &&
            this.lastName.length > 0 &&
            emailRegex.test(this.email) &&
            this.password.length >= 8 &&
            phoneRegex.test(this.phoneNumber) &&
            this.dateOfBirth instanceof Date &&
            this.address.street.length > 0 &&
            this.address.city.length > 0 &&
            this.address.country.length > 0 &&
            this.address.postalCode.length > 0
        );
    }
} 