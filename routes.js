const userController = require('./controller/UserController')
const requestValidators = require('./validations/RequestValidators')
const { body, validationResult } = require('express-validator');

exports.routeConfig = app => {
    app.post("/api/v1/users", requestValidators.validateUser(), userController.createUser)
    app.get("/api/v1/users", userController.getUsers)
    app.get("/api/v1/users/:userId", userController.getUser)
    app.delete("/api/v1/users/:userId", userController.deleteUser)
}