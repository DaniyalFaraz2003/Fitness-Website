
const calculateBMR = (weight, height, age) => {
    // 66.5 + (13.75 × weight in kg) + (5.003 × height in cm) - (6.75 × age).
    return  66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
};

const calculateBMI = (weight, height) => {
    /* 
    1. Multiply your weight in pounds by 703.
    2. Divide that answer by your height in inches (there are 12 inches in 1 foot).
    3. Divide that answer by your height in inches again.
    */
    return ((weight) / height) / height;  
};

const calculateBFP = (waist, neck, height) => {
    // 86.010 x log10 (abdomen - neck) - 70.041 x log10 (height) + 36.76
    return 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
};

const calculateWLP = (start, current) => {
    // (start - current) / start * 100;
    return (start - current) / start * 100;
};


const BMICalculator = (req, res) => {
    const { weight, height } = req.body;
    const bmi = calculateBMI(weight, height);
    res.json({ bmi });
}

const BMRCalculator = (req, res) => {
    const { weight, height, age } = req.body;
    const bmr = calculateBMR(weight, height, age);
    res.json({ bmr });
}

const BFPCalculator = (req, res) => {
    const { waist, neck, height } = req.body;
    const bfp = calculateBFP(waist, neck, height);
    res.json({ bfp });
}

const WLPCalculator = (req, res) => {
    const { start, current } = req.body;
    const wlp = calculateWLP(start, current);
    res.json({ wlp });
}

module.exports = {
    BMICalculator, BFPCalculator, BMRCalculator, WLPCalculator
}