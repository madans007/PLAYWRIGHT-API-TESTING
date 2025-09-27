import { faker } from '@faker-js/faker';
import testData from '../data/testData.json';

/**
 * Generate a random user using Faker
 * Returns a payload suitable for JSONPlaceholder
 */
export const getRandomUser = () => {
    return {
        name: faker.person.fullName(),
        username: faker.internet.username(), // lowercase 'username'
        email: faker.internet.email(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
        },
        phone: faker.phone.number(),
        website: faker.internet.url(),
        company: {
            name: faker.company.name(),
            catchPhrase: faker.company.catchPhrase(),
            bs: faker.company.catchPhrase(), // just reuse catchPhrase
        }

    };
};

/**
 * Get a single user from static JSON data
 */
export const getJsonUser = () => testData[0];

/**
 * Get all users from static JSON data
 */
export const getJsonUsers = () => testData;
