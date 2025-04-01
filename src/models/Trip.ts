import { Trip } from '../interfaces/Trip';

export class TripModel implements Trip {
    id: string;
    destination: string;
    description: string;
    startDate: Date;
    endDate: Date;
    price: number;
    availableSeats: number;
    imageUrl?: string;
    includedServices: string[];
    category: 'beach' | 'mountain' | 'city' | 'adventure';

    constructor(data: Trip) {
        this.id = data.id;
        this.destination = data.destination;
        this.description = data.description;
        this.startDate = new Date(data.startDate);
        this.endDate = new Date(data.endDate);
        this.price = data.price;
        this.availableSeats = data.availableSeats;
        this.imageUrl = data.imageUrl;
        this.includedServices = [...data.includedServices];
        this.category = data.category;
    }

    isAvailable(): boolean {
        return this.availableSeats > 0 && this.startDate > new Date();
    }

    getDuration(): number {
        const diffTime = this.endDate.getTime() - this.startDate.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
    }

    getPricePerDay(): number {
        return this.price / this.getDuration();
    }

    toJSON(): Trip {
        return {
            id: this.id,
            destination: this.destination,
            description: this.description,
            startDate: this.startDate,
            endDate: this.endDate,
            price: this.price,
            availableSeats: this.availableSeats,
            imageUrl: this.imageUrl,
            includedServices: [...this.includedServices],
            category: this.category
        };
    }
}
