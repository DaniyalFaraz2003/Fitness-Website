const express = require("express");
const {
    login, register
} = require("../controllers/handleAuth")
const {
    getArticle, createArticle, deleteArticle
} = require("../controllers/articles")

const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)

router.route("/articles").get(getArticle)
router.route("/articles").post(createArticle)
router.route("/articles/:id").delete(deleteArticle)

module.exports = router;