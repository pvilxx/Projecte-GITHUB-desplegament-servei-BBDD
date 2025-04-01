"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripModel = void 0;

class TripModel {
    constructor(data) {
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
    
    isAvailable() {
        return this.availableSeats > 0 && this.startDate > new Date();
    }
    
    getDuration() {
        const diffTime = this.endDate.getTime() - this.startDate.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    
    getPricePerDay() {
        return this.price / this.getDuration();
    }
    
    toJSON() {
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
exports.TripModel = TripModel;
