import React from "react";
import ExerciseCard from "./ExerciseCard";

export default function Exercises({ exercises }) {
    return (
        <div>
            <div className="flex items-center justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">Workouts Based On Your Preference</h1>
            </div>
            <div style={{
                background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
            }} className="rounded-xl h-fit m-12 flex flex-col lg:flex-row items-center justify-center p-10 gap-5">
                <ExerciseCard name={"Pull Ups - One Arm"} amount={"1 x 8"} instructions={"SET-UP: Grasp a pull up bar with one arm, prepare to rock and roll. LIFT: Bracing through your core, lift yourself up until your chin is over the bar, trying to get as high as possible. Cue yourself to pull your chest to the bar to ensure full height. Attempt to descend all the way to full extension as this will engage more of the shoulder stabilizers and muscle mass of the back. EMPHASIS: Do not swing your body up to the bar. STRENGTH CRITERIA: The one arm pull up is obviously an advanced strength exercise, and should not be attempted until suitable progression achieved. In particular, you should be able to perform assisted one arm pull ups for reps."} difficulty={"advanced"} time={"45"} focus={"speed"}/>
            </div>
        </div>
    );
}