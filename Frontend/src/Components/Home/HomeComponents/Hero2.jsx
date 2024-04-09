import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant, staggerContainer } from './motion'

let services = [
    {
        title: "something"
    },
    {
        title: "else"
    }
]

const ServiceCard = ({ index, title, }) => {
    return (
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full p-[1px] rounded-[20px]'>

            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-gray-300 relative rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <h3 className='text-white text-[20px] font-bold text-center z-10'>{title}</h3>
            </div>
        </motion.div>
    );
}

const Hero2 = () => {

    return (
        <section className='z-0 flex flex-col mb-10 mt-10'>
            <div className="z-0">
                <motion.div variants={textVariant()}>
                    <p className="blue-text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</p>
                </motion.div>
                <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 font-semibold text-lg text-gray-700  text-[17px] max-w-3xl leading-[30px]'>
                Welcome to Pro Nutrition & Fitness! We're here to help you reach your fitness goals with personalized nutrition plans, tailored workouts, and expert guidance. Let's embark on this journey to a healthier, stronger you together!
                </motion.p>
                <hr className='mt-5 border-black'/>
                <div className='mt-20 flex gap-5'>
                    {services.map((service, index) => {
                        return (<ServiceCard key={service.title} index={index} id={index} />)
                    })}
                </div>
            </div>
        </section>
    );

}

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section variants={staggerContainer()} initial='hidden' whileInView={'show'} viewport={{ once: true, amount: 0.25 }} className={`sm:px-16 px-6 max-w-7xl mx-autor relative z-0`}>
            <span className='hash-span' id={idName}></span>
            <Component />
        </motion.section>
    );
}


export default SectionWrapper(Hero2, "about")