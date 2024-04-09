// controller.js
const fs = require('fs')
const path = require("path")
// Path to the JSON file storing login details
const loginFilePath = path.resolve(__dirname,  '../Data/loginData.json');

// Function to read login data from the JSON file
const readLoginData = () => {
    try {
        const loginData = fs.readFileSync(loginFilePath, 'utf8');
        return JSON.parse(loginData);
    } catch (err) {
        // If the file doesn't exist or there's an error, return an empty object
        return {};
    }
};

// Function to write login data to the JSON file
const writeLoginData = (data) => {
    fs.writeFileSync(loginFilePath, JSON.stringify(data, null, 2), 'utf8');
};

const loginUser = (username, password) => {
    const loginData = readLoginData();
    if (loginData.hasOwnProperty(username) && loginData[username] === password) {
        console.log('Login successful!');
        return true;
    } else {
        console.log('Invalid username or password. Please try again.');
        return false;
    }
};

const registerUser = (username, password) => {
    // Read existing login data from the file
    const loginData = readLoginData();

    // Check if the username already exists
    if (loginData.hasOwnProperty(username)) {
        console.log('Username already exists. Please choose a different username.');
        return false;
    }

    // Add the new user to the login data
    loginData[username] = password;

    // Write the updated login data back to the file
    writeLoginData(loginData);
    console.log('Registration successful!');
    return true;
};

const login = (req, res) => {
    const { username, password } = req.body;
    const status = loginUser(username, password);
    if (status) {
        res.status(200).send("Login successful")
    }
    else {
        res.status(201).send("Incorrect Username Or Password")
    }
}

const register = (req, res) => {
    const { username, password } = req.body;
    const status = registerUser(username, password);
    if (status) {
        res.status(200).send("Register successful")
    }
    else {
        res.status(201).send("Username already exists. Please choose a different username.")
    }
}

module.exports = { login, register };
