import { TripService } from '../services/TripService';
import { TripModel } from '../models/Trip';

describe('TripService', () => {
    let tripService: TripService;

    beforeEach(() => {
        tripService = new TripService();
    });

    describe('getAvailableTrips', () => {
        it('should return only available trips', async () => {
            const trips = await tripService.getAvailableTrips();
            
            expect(trips.length).toBeGreaterThan(0);
            trips.forEach(trip => {
                const tripModel = new TripModel(trip);
                expect(tripModel.isAvailable()).toBe(true);
            });
        });
    });

    describe('getTripById', () => {
        it('should return a trip when valid ID is provided', async () => {
            const trip = await tripService.getTripById('1');
            expect(trip).not.toBeNull();
            expect(trip?.destination).toBe('Barcelona');
        });

        it('should return null when invalid ID is provided', async () => {
            const trip = await tripService.getTripById('invalid-id');
            expect(trip).toBeNull();
        });
    });
});

describe('TripModel', () => {
    const tripData = {
        id: 'test-1',
        destination: 'Test Destination',
        description: 'Test Description',
        startDate: new Date('2025-06-01'),
        endDate: new Date('2025-06-05'),
        price: 1000,
        availableSeats: 10,
        includedServices: ['Service 1', 'Service 2'],
        category: 'beach' as const
    };

    it('should calculate correct duration', () => {
        const trip = new TripModel(tripData);
        expect(trip.getDuration()).toBe(4); // 4 days between Jun 1 and Jun 5
    });

    it('should calculate correct price per day', () => {
        const trip = new TripModel(tripData);
        expect(trip.getPricePerDay()).toBe(250); // 1000/4 = 250
    });

    it('should correctly determine availability', () => {
        const availableTrip = new TripModel(tripData);
        expect(availableTrip.isAvailable()).toBe(true);

        const pastTrip = new TripModel({
            ...tripData,
            startDate: new Date('2024-01-01'),
            endDate: new Date('2024-01-05')
        });
        expect(pastTrip.isAvailable()).toBe(false);

        const noSeatsTrip = new TripModel({
            ...tripData,
            availableSeats: 0
        });
        expect(noSeatsTrip.isAvailable()).toBe(false);
    });
});
