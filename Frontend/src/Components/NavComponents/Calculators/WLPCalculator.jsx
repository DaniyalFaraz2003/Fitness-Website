import React from "react";

export default function WLPCalculator() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <form>
                <h4 className="text-2xl font-semibold mb-4">BMR Calculator</h4>

                <div className="mb-4">
                    <label htmlFor="weight" className="block mb-2">Weight (kg)</label>
                    <input type="number" name="weight" id="weight" className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter weight" />
                </div>

                <div className="mb-4">
                    <label htmlFor="height" className="block mb-2">Height (cm)</label>
                    <input type="number" name="height" id="height" className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter height" />
                </div>

                <div className="mb-4">
                    <label htmlFor="age" className="block mb-2">Age</label>
                    <input type="number" name="age" id="age" className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter age" />
                </div>

                <div className="mb-4">
                    <label htmlFor="bmrresult" className="block mb-2">Your BMR is</label>
                    <input type="text" name="bmrresult" id="bmrresult" className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" readOnly />
                </div>

                <hr className="my-6 border-t" />

                <div className="flex justify-between">
                    <button type="submit" className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400">Calculate</button>
                    <button type="button" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400">Reset</button>
                </div>
            </form>
        </div>

    );
}