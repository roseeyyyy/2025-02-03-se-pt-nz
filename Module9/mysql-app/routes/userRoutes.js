const express = require("express");
const router = express.Router();
let Controllers = require("../controllers/userController")
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get('/', (req, res) => {
Controllers.userController.getUsers(res);
})
// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
Controllers.userController.createUser(req.body, res)
})
module.exports = router;