
import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

export const validateSchema = (schema: object, data: object) => {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
        console.log(validate.errors);
    }
    return valid;
};
