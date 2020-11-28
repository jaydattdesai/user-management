const { body, validationResult } = require('express-validator');
require("../config/dbonfig")

sequelize.sync()

exports.createUser = (req, res, err) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send({ errors: errors.array() });
    } else {
        User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
        }).then(result => {
            res.status(201).send(result)
        });  
    }          
      
}

exports.getUsers = () => {
    return User.findAll();
}

exports.getUser = (req) => {
    return User.findAll({
        where: {
            id: req.params.userId
        }
    });
}

exports.deleteUser = (req) => {
    return User.destroy({
        where: {
            id: req.params.userId
        }
    });
}