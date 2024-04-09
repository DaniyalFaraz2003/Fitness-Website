const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs
const path = require("path")

const articlesFilePath = path.resolve(__dirname, '../Data/Articles.json');

const getArticle = (req, res) => {
    try {
        const articlesData = fs.readFileSync(articlesFilePath);
        const articles = JSON.parse(articlesData);
        res.json(articles);
    } catch (err) {
        console.error('Error reading articles:', err);
        res.status(500).send('Internal Server Error');
    }
}

const createArticle = (req, res) => {
    try {
        const articlesData = fs.readFileSync(articlesFilePath);
        const articles = JSON.parse(articlesData);
        const newArticle = {
            id: uuidv4(), // Generate unique ID for the new article
            ...req.body,
            DatePublished: new Date().toISOString() // Set current date and time as DatePublished
        };
        articles.push(newArticle);
        fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));
        res.status(201).json(newArticle);
    } catch (err) {
        console.error('Error adding new article:', err);
        res.status(500).send('Internal Server Error');
    }
}

const deleteArticle = (req, res) => {
    try {
        const articlesData = fs.readFileSync(articlesFilePath);
        let articles = JSON.parse(articlesData);
        const index = articles.findIndex(article => article.id === req.params.id);
        if (index === -1) {
            res.status(404).send('Article not found');
        } else {
            articles.splice(index, 1); // Remove article from array
            fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));
            res.status(200).send('Article deleted successfully');
        }
    } catch (err) {
        console.error('Error deleting article:', err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getArticle, createArticle, deleteArticle
}