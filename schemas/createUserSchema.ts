export const createUserSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "User",
    type: "object",
    properties: {
        id: { type: "integer" },
        name: { type: "string" },
        username: { type: "string" },
        email: { type: "string", format: "email" },
        address: {
            type: "object",
            properties: {
                street: { type: "string" },
                city: { type: "string" },
                zipcode: { type: "string" }
            },
            required: ["street", "city", "zipcode"],
            additionalProperties: false
        },
        phone: {
            type: "string",
            pattern: "^[0-9\\.\\-\\s\\(\\)]+( x[0-9]+)?$"
        },
        website: { type: "string", format: "uri" },
        company: {
            type: "object",
            properties: {
                name: { type: "string" },
                catchPhrase: { type: "string" },
                bs: { type: "string" }
            },
            required: ["name", "catchPhrase", "bs"],
            additionalProperties: false
        }
    },
    required: ["id", "name", "username", "email", "address", "phone", "website", "company"],
    additionalProperties: false
};
