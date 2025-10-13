import dotenv from 'dotenv';
dotenv.config();                // it loads .env file

export const BASE_URL = process.env.BASE_URL!; //reads the value from .env