import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { useRef } from 'react';
import music from "../assets/Halcyon - RunawayI.mp3";
const MotionLink = motion(Link);
const Logo = ({color,play}) => {
        const ref =useRef(null);
        const [click, setClick] =useState(false);
        const handleClick = () => {
                setClick(!click);
                if(!click){
                        ref.current.play();
                }
                else{
                        ref.current.pause();
                }
        };
       
   return (
        <div className = 'flex items-center justify-center ' onClick={() => handleClick()}>
        <audio src={music} ref={ref} loop/>  
        <MotionLink href = "/#" className = {`w-16 h-16 ${color} border border-white border-solid border-2 text-white flex items-center justify-center rounded-full text-2xl font-bold`}
        whileHover={{
        backgroundColor:["#050816", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)","rgba(131,58,180,1)","#050816"], 
        transition:{duration:1, repeat:Infinity},
        }}
    
        whileTap={{scale:0.5}}
        
        ><img className="w-8" src="Logo.png" alt="K"></img></MotionLink>
        </div>
        )
}

export default Logo;