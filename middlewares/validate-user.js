const { validationResult } = require("express-validator");

const validateUserParmas = (request, response, next) =>{
    const checkErrors = validationResult(request);
    if (!checkErrors.isEmpty()) {
        return response.status(422).json(checkErrors)
    }

    next();
}

module.exports = validateUserParmas;