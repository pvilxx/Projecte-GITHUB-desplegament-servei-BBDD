"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripService = void 0;

class TripService {
    constructor() {
        this.trips = [
            {
                id: '1',
                destination: 'Barcelona',
                description: 'Descobreix la màgia de la ciutat comtal',
                startDate: new Date('2025-06-01'),
                endDate: new Date('2025-06-05'),
                price: 599.99,
                availableSeats: 20,
                imageUrl: 'https://example.com/barcelona.jpg',
                includedServices: ['Hotel 4*', 'Esmorzar', 'Visites guiades'],
                category: 'city'
            },
            {
                id: '2',
                destination: 'Costa Brava',
                description: 'Relaxa\'t a les millors platges de la Costa Brava',
                startDate: new Date('2025-07-15'),
                endDate: new Date('2025-07-22'),
                price: 799.99,
                availableSeats: 15,
                imageUrl: 'https://example.com/costa-brava.jpg',
                includedServices: ['Hotel 5*', 'Tot inclòs', 'Activitats aquàtiques'],
                category: 'beach'
            }
        ];
    }
    
    async getAvailableTrips() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const availableTrips = this.trips.filter(trip => 
                    trip.availableSeats > 0 && trip.startDate > new Date()
                );
                resolve(availableTrips);
            }, 500);
        });
    }
    
    async getTripById(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const trip = this.trips.find(t => t.id === id);
                resolve(trip || null);
            }, 300);
        });
    }
}
exports.TripService = TripService;
