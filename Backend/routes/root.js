const express = require("express");
const {
    login, register
} = require("../controllers/handleAuth")

const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)

module.exports = router;