import React from "react";
import _15 from "../../../../public/exPngs/15.png"
import _30 from "../../../../public/exPngs/30.png"
import _45 from "../../../../public/exPngs/45.png"
import _60 from "../../../../public/exPngs/60.png"

import muscle from "../../../../public/exPngs/muscle.png"
import strength from "../../../../public/exPngs/strength.png"
import speed from "../../../../public/exPngs/run.png"
import mobility from "../../../../public/exPngs/mobility.png"
import flexibility from "../../../../public/exPngs/flexibility.png"
import cardio from "../../../../public/exPngs/cardio.png"

export default function ExerciseCard({ name, amount, instructions, difficulty, time, focus }) {
    const data = {
        "15": _15,
        "30": _30,
        "45": _45,
        "60": _60,
        "muscle": muscle,
        "strength": strength,
        "speed": speed,
        "mobility": mobility,
        "flexibility": flexibility,
        "cardio": cardio,
        "beginner": "border-green-600 text-green-600",
        "intermediate": "border-blue-600 text-blue-600",
        "advanced": "border-red-600 text-red-600"
    }

    const lines = description.matchAll(/[A-Z\s]+:\s.*?(?=[A-Z\s]+:|$)/g);
    for (let line of lines) {
        console.log(line[0].trim());
        console.log();
    }

    return (
        <div className="container">
            <div className="max-w-md w-full bg-gray-200 shadow-lg rounded-xl p-6">
                <div className="flex flex-col ">
                    <div className="">

                        <div className="flex-auto justify-evenly">
                            <div className="flex flex-wrap ">

                                <div className="flex items-center w-full justify-between min-w-0 ">
                                    <h2 className="text-2xl font-bold text-gray-900 mr-auto cursor-pointer  truncate ">{name}</h2>
                                    <div className={`flex items-center border-2 ${data[difficulty]} font-bold text-md px-2 py-1 ml-3 rounded-lg`}>
                                        {difficulty.toUpperCase()}</div>
                                </div>
                            </div>
                            <div className="text-xl text-gray-800 font-semibold mt-1">{amount}</div>
                            <hr className="w-full border-black mt-5" />
                            <div className="text-lg text-gray-800 font-semibold mt-4">INSTRUCTIONS</div>
                            <div className="my-3">
                                {instructions}
                            </div>
                            <hr className="w-full border-black mt-5" />
                            <div className="lg:flex py-4 text-sm text-gray-600">
                                <div className="flex-1 inline-flex items-center">
                                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                        <ul className="flex flex-row w-full justify-center items-center space-x-2">
                                            <li className="">
                                                <img className="w-16" src={data[time]} alt="" />
                                            </li>
                                            <li className="">
                                                <img className="w-16" src={data[focus]} alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}