import React, { Suspense } from "react";
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

const ToolCard = ({ index, name, testimonial, designation, company, image }) => {
	return (
		<motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className=' bg-gray-100 p-10 rounded-3xl xs:w-[320px] w-full'>
			<p className='blue-text-gradient font-black text-[48px]'>"</p>
			<div className='mt-1'>
				<p className='blue-text-gradient tracking-wider text-[18px]'>{testimonial}</p>
				<div className='mt-7 flex justify-between items-center gap-1'>
					<div className='flex-1 flex flex-col'>
						<p className='blue-text-gradient font-medium text-[16px]'><span className='blue-text-gradient'>@</span>{name}</p>
						<p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
					</div>
					<img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover'/>
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
			<div className={`sm:px-16 px-6 sm:py-16 py-10 bg-tertiary rounded-2xl min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Tools.</h2>
				</motion.div>
			</div>
			<div className={`sm:px-16 px-6 -mt-20 pb-14 flex flex-col md:flex-row lg:flex-row gap-7`}>
                {tools.map((tool, index) => {
                    return <ToolCard key={tool.name} index={index} {...tool} />;
                })}
            </div>

		</div>
	)
}

function Explore() {
    const tools = [
        {
            testimonial:
                "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
            name: "Sara Lee",
            designation: "CFO",
            company: "Acme Co",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
            testimonial:
                "I've never met a web developer who truly cares about their clients' success like Rick does.",
            name: "Chris Brown",
            designation: "COO",
            company: "DEF Corp",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
            testimonial:
                "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
            name: "Lisa Wang",
            designation: "CTO",
            company: "456 Enterprises",
            image: "https://randomuser.me/api/portraits/women/6.jpg",
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