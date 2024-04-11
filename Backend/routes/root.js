const express = require("express");
const {
    login, register
} = require("../controllers/handleAuth")

const {
    getArticle, createArticle, deleteArticle
} = require("../controllers/articles")

const {
    BMICalculator, BFPCalculator, BMRCalculator, WLPCalculator
} = require("../controllers/calculate")

const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)

router.route("/articles").get(getArticle)
router.route("/articles").post(createArticle)
router.route("/articles/:id").delete(deleteArticle)

router.route("/exercises").post(); // controller to be made

router.route("/calculator/bmr").post(BMRCalculator);
router.route("/calculator/bmi").post(BMICalculator);
router.route("/calculator/wlp").post(WLPCalculator);
router.route("/calculator/bfp").post(BFPCalculator);

module.exports = router;