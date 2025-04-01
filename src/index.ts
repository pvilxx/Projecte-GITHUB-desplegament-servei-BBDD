import { TripService } from './services/TripService';
import { Trip } from './interfaces/Trip';

async function displayAvailableTrips() {
    const tripService = new TripService();
    
    try {
        console.log('Cercant viatges disponibles...');
        const availableTrips = await tripService.getAvailableTrips();
        
        console.log('\n=== VIATGES DISPONIBLES ===\n');
        availableTrips.forEach(trip => {
            console.log(`🌍 Destí: ${trip.destination}`);
            console.log(`📝 Descripció: ${trip.description}`);
            console.log(`📅 Data d'inici: ${trip.startDate.toLocaleDateString('ca-ES')}`);
            console.log(`📅 Data de fi: ${trip.endDate.toLocaleDateString('ca-ES')}`);
            console.log(`💶 Preu: ${trip.price}€`);
            console.log(`👥 Places disponibles: ${trip.availableSeats}`);
            console.log(`✨ Serveis inclosos: ${trip.includedServices.join(', ')}`);
            console.log(`🏷️ Categoria: ${trip.category}`);
            console.log('─'.repeat(40) + '\n');
        });

        if (availableTrips.length === 0) {
            console.log('No hi ha viatges disponibles en aquest moment.');
        }
    } catch (error) {
        console.error('Error al obtenir els viatges:', error);
    }
}

// Executar la funció de visualització
displayAvailableTrips();
