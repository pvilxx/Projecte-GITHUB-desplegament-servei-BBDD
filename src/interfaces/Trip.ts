export interface Trip {
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
}
