const { body, validationResult } = require('express-validator');


exports.validateUser = (req, res, next) => {        
        return body('firstname').isLength({min: 5})        
        
}
