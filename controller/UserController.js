const userService = require("../service/UserService")
exports.createUser = (req, res, err) => {
    userService.createUser(req, res, err)
}

exports.getUsers = (req, res) => {
    userService.getUsers()
    .then((result) => {
        res.send(result)
    })    
}

exports.getUser = (req, res) => {
    userService.getUser(req)
    .then((result) => {
        res.send(result)
    })    
}

exports.deleteUser = (req, res) => {
    userService.deleteUser(req)
    .then(() => {
        res.status(200).send("user deleted successfully")
    })    
}