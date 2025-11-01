
export const updateUserSchema = {
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
                suite: { type: "string" },
                city: { type: "string" },
                zipcode: { type: "string" },
                geo: {
                    type: "object",
                    properties: {
                        lat: { type: "string" },
                        lng: { type: "string" }
                    },
                    required: ["lat", "lng"]
                }
            },
            required: ["street", "city", "zipcode"],
        },
        phone: { type: "string" },
        website: { type: "string" },
        company: {
            type: "object",
            properties: {
                name: { type: "string" },
                catchPhrase: { type: "string" },
                bs: { type: "string" }
            },
            required: ["name", "catchPhrase", "bs"]
        }
    },
    required: ["id", "name", "username", "email", "address", "phone", "company"],
    additionalProperties: false
};

// Partial update schema
export const updateUserPartialSchema = {
    title: "Partial User",
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
                suite: { type: "string" },
                city: { type: "string" },
                zipcode: { type: "string" },
                geo: {
                    type: "object",
                    properties: {
                        lat: { type: "string" },
                        lng: { type: "string" }
                    }
                }
            }
        },
        phone: { type: "string" },
        website: { type: "string" },
        company: {
            type: "object",
            properties: {
                name: { type: "string" },
                catchPhrase: { type: "string" },
                bs: { type: "string" }
            }
        }
    },
    additionalProperties: false
};
