import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { motion } from 'framer-motion'
import { fadeIn, textVariant, staggerContainer } from './motion'
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import carb from "../../../../public/carb.png"
import fats from "../../../../public/fats.png"
import protein from "../../../../public/protein.png"
import vitamins from "../../../../public/vitamins.png"


const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as='div'
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className='canvas-loader'></span>
            <p
                style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};


const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};


const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section variants={staggerContainer()} initial='hidden' whileInView={'show'} viewport={{ once: true, amount: 0.25 }} className={`sm:px-16 px-6 max-w-7xl mx-autor relative z-0 mb-10`}>
            <span className='hash-span' id={idName}></span>
            <Component />
        </motion.section>
    );
}



const ToolCard = () => {
    const [activeTab, setActiveTab] = useState('home'); // State to manage active tab

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <motion.div variants={fadeIn("", "spring", 0 * 0.5, 0.75)} className='p-6 rounded-lg transition duration-300 transform hover:-translate-y-1 cursor-pointer'>

            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-wrap justify-center items-center bg-gray-100 border-b border-gray-200 py-2">
                        <button
                            onClick={() => handleTabChange('home')}
                            className={`px-4 py-2 mx-2 my-1 rounded-lg uppercase font-medium text-xs focus:outline-none transition-colors duration-300 ${activeTab === 'home' ? 'bg-gradient-to-r from-blue-400 to-purple-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleTabChange('profile')}
                            className={`px-4 py-2 mx-2 my-1 rounded-lg uppercase font-medium text-xs focus:outline-none transition-colors duration-300 ${activeTab === 'profile' ? 'bg-gradient-to-r from-blue-400 to-purple-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => handleTabChange('disabled')}
                            className={`px-4 py-2 mx-2 my-1 rounded-lg uppercase font-medium text-xs focus:outline-none transition-colors duration-300 ${activeTab === 'disabled' ? 'bg-gradient-to-r from-blue-400 to-purple-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            Disabled
                        </button>
                    </div>
                    <div className="p-6">
                        {activeTab === 'home' && (
                            <>
                                <h5 className="mb-2 text-xl font-medium leading-tight">Home Content</h5>
                                <p className="mb-4 text-base">Content related to Home tab.</p>
                            </>
                        )}
                        {activeTab === 'profile' && (
                            <>
                                <h5 className="mb-2 text-xl font-medium leading-tight">Profile Content</h5>
                                <p className="mb-4 text-base">Content related to Profile tab.</p>
                            </>
                        )}
                        {activeTab === 'disabled' && (
                            <>
                                <h5 className="mb-2 text-xl font-medium leading-tight">Disabled Content</h5>
                                <p className="mb-4 text-base">Content related to Disabled tab.</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


const Tools = ({ tools }) => {
    return (
        <div style={{
            background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
        }} className='mt-12 rounded-[20px]'>
            <div className={`sm:px-16 px-6 sm:py-16 py-10 bg-tertiary rounded-2xl`}>
                <motion.div variants={textVariant()}>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Tools.</h2>
                </motion.div>
            </div>
            <div className={`sm:px-16 px-6 pb-14 w-full h-full self-center justify-self-center`}>
                <ToolCard />
            </div>  

        </div>
    )
}

function Explore() {
    const tools = [
        {
            title: 'Latest Articles',
            description: 'Stay updated with the latest articles on fitness, nutrition, and healthy living.',
            icon: 'article_icon.png',
        },
        {
            title: 'Exercise Routine Getter',
            description: 'Find the perfect workout routine tailored to your fitness goals and preferences.',
            icon: 'exercise_icon.png',
        },
        {
            title: 'Calculators',
            description: 'Calculate your BMI, body fat percentage, and more with our handy calculators.',
            icon: 'calculator_icon.png',
        },
    ];
    const nutrients = [
        {
            name: "carb",
            icon: carb
        },
        {
            name: "fats",
            icon: fats
        },
        {
            name: "protein",
            icon: protein
        },
        {
            name: "vitamins",
            icon: vitamins
        },

    ]
    return (
        <>
            <div className='h-fit'>
                <p className={`blue-text-gradient mb-10 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>Explore More</p>
                <div className='flex flex-col items-center justify-center lg:flex-row'>
                    <div className='flex w-96 flex-row justify-center gap-10'>
                        {nutrients.map((nutrient) => {
                            return (
                                <div className='w-28 h-28' key={nutrient.name}>
                                    <BallCanvas icon={nutrient.icon} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Tools tools={tools} />
            </div>
        </>
    )
}

export default SectionWrapper(Explore, "explore")