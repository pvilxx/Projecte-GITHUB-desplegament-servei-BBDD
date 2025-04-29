"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationService = void 0;
const User_1 = require("../models/User");
const bcrypt = __importStar(require("bcrypt"));
class RegistrationService {
    constructor() {
        this.SALT_ROUNDS = 10;
    }
    async registerUser(userData) {
        // This is a placeholder implementation
        // In a real application, this would interact with a database
        const user = new User_1.UserModel(userData);
        if (!user.validate()) {
            throw new Error('Invalid user data');
        }
        // Hash the password
        user.password = await this.hashPassword(user.password);
        // Here you would typically save to database
        // For now, we'll just return the user object
        return user;
    }
    async validateUserData(userData) {
        const user = new User_1.UserModel(userData);
        return user.validate();
    }
    async checkEmailExists(email) {
        // This is a placeholder implementation
        // In a real application, this would check against a database
        return false;
    }
    async hashPassword(password) {
        return bcrypt.hash(password, this.SALT_ROUNDS);
    }
}
exports.RegistrationService = RegistrationService;
