const joi = require('joi');

const schemaValidation = joi.object({
    name: joi.string().required().messages({ "string.empty": "The given request not empty" }),
    mobile:joi.number().required(),
    studentEmail:joi.string().email(),
    hobbies: joi.array().items(
        joi.string().required().messages({ "string.empty": "The given request not empty" })
    )
});

module.exports = schemaValidation;