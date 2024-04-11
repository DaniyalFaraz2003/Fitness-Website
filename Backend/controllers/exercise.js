const fs = require('fs');
const path = require("path")

const exerciseFilePath = path.resolve(__dirname, '../Data/workouts.json');

const getExercises = (req, res) => {
    const { Duration, Difficulty, Focus } = req.body;
    const exercisesData = fs.readFileSync(exerciseFilePath);
    const exercises = JSON.parse(exercisesData);

    // Filter exercises based on provided criteria
    const filteredExercises = exercises.workouts[Duration][Difficulty][Focus];
    if (filteredExercises) {
        return res.json(filteredExercises);
    } else {
        return res.status(404).json({ error: 'Exercises not found' });
    }
}

module.exports = {
    getExercises
}