import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Skill = ({technology, x, y}) => {
    return (
        <motion.div className="flex flex-row flex-wrap items-center justify-center rounded-full absolute shadow-white cursor-pointer  gap-10"

        initial={{x:0,y:0}}
        whileInView={{x:x, y:y}}

        transition={{duration:1.5}}>
            <div className='w-[17vh] h-[10vh] 2xl:h-[15vh] xl:h-[14vh] lg:h-[13vh] md:h-[12vh] sm:h-[11vh] xs:h-[10vh]' key={technology.name}>
                <BallCanvas icon={technology.icon} />
            </div>
        </motion.div>
    )
}

const Skills =()=>{
    return (
        <div className="tsp">
        <motion.div variants={textVariant()} className="text-center">
            <h2 className={"font-bold text-8x1  w-full text-center" + styles.sectionHeadText}>Skills</h2>
        </motion.div>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
            {technologies.map((technology,index) => (
            <motion.div key={index} className="flex items-center justify-center rounded-full font-semibold  text-light shadow-white cursor-pointer"
            whileHover={{scale:1.1}}>
                <Skill technology={technology} x={technology.x} y={technology.y} />
            </motion.div>
            ))}
        </div>
        </div>
    )
}


export default Skills;