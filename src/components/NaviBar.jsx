import {  useLocation } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import {motion} from "framer-motion";
import Logo from './Logo';
import { styles } from "../styles";
import { GithubIcon, LeetcodeIcon, LeetcodeIconDark, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons';



const NavBar = () => {
    const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const observer = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen=()=>{

    setIsOpen(!isOpen);
    
  }

  const CustomLink = ({href,title,className=""}) => {
    const location = useLocation();
    return(
    <a href={href} className = {`${className} ${active === title? 'hhx text-[22px]' : 'mhx'} relative group`} onClick={() => {
        setActive(title);
        setIsOpen(false);
      }}>
    {title} 
    
    <span className={` h-[1.8px] inline-block bg-white absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300
    ${active === title? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </a>
    )
}
const MobileLink = ({href,title,className=""}) => {
  const location = useLocation();
  return(
  <a href={href} className = {` ${className} ${active === title? 'hhx text-[22px]' : 'mhx'} relative group my-1.5`} onClick={() => {
      setActive(title);
      setIsOpen(false);
    }}>
  <span className='text-black'>{title} </span>
  <span className={` h-[1.8px] inline-block bg-black absolute left-0 -bottom-0.5
  group-hover:w-full transition-[width] ease duration-300
  ${active === title? 'w-full' : 'w-0'}`}>&nbsp;</span>
  </a>
  )
}
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActive(visibleSection.id);
      }
    });
    const sections = document.querySelectorAll('.navi');

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    window.addEventListener("scroll", handleScroll);

    return () => {sections.forEach((section) => {
      observer.current.unobserve(section);
    });
    window.removeEventListener("scroll", handleScroll);}
  }, []);
   return (
    <div className={`${
        styles.paddingX
      } w-full flex items-center py-1 fixed fixedHeight top-0  z-20 ${
        (scrolled )? "bg-primary" : "bg-transparent"
      }`} >
    <header className = 'w-full 2xl:px-20 xl:px-20 lg:px-20 md:px-15 sm:px-10 xs:px-5 py-6 font-medium flex items-center justify-between  text-white text-[18px] relative' >

    <button className='flex-col justify-center items-center mt-3 lg:hidden' onClick={handleOpen}>
      <span className={`bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen? 'rotate-45 translate-y-1':'-translate-y-0.5' }`}></span>
      <span className={`bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen? 'opacity-0':'opacity-100' }`}></span>
      <span className={`bg-white  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen? '-rotate-45 -translate-y-1':'translate-y-0.5' }`}></span>
    </button>

    <div className='w-full hidden justify-between items-center lg:flex'>
    <nav>
    <CustomLink href="/#" title="Home" className='mr-4' />
    <CustomLink href="/#About" title="About" className='mx-4' />
    <CustomLink href="/#Projects" title="Projects" className='mx-4' />
    <CustomLink href="/#Contact" title="Contact" className='ml-4' />
    </nav>


    <nav className='flex items-center justify-center flex-wrap'> 
    <motion.a href = "https://twitter.com/" target = {"_blank"} whileHover={{y:-4}} whileTap={{scale:0.9}} className='w-7 mr-3'><TwitterIcon /></motion.a>
    <motion.a href = "https://github.com/karanprasadgupta" target = {"_blank"} whileHover={{y:-4}} whileTap={{scale:0.9}} className='w-7 mx-3'><GithubIcon /></motion.a>
    <motion.a href = "https://in.linkedin.com/in/karan-prasad-gupta-49a002232" target = {"_blank"} whileHover={{y:-4}} whileTap={{scale:0.9}} className='w-7 mx-3'><LinkedInIcon /></motion.a>
    <motion.a href = "https://leetcode.com/karan20439/" target = {"_blank"} whileHover={{y:-4}} whileTap={{scale:0.9}} className='w-7 ml-3'>
      <LeetcodeIcon/>
    </motion.a>
    </nav>
    </div>
    
    <div className={`min-w-[70vw]  flex  flex-col justify-between z-30 items-center  top-[0.5] left-[50%] -translate-x-[25px] -translate-y-[-55%]
    bg-white/75 rounded-lg backdrop-blur-md py-32 ${!isOpen? 'hidden':''} lg:hidden `}>
    <nav  className='flex items-center flex-col justify-center'>
    <MobileLink href="/#" title="Home" className='' />
    <MobileLink href="/#About" title="About" className='' />
    <MobileLink href="/#Projects" title="Projects" className='' />
    <MobileLink href="/#Contact" title="Contact" className='' />
    </nav>


    <nav className='flex items-center justify-center flex-wrap mt-2'> 
    <motion.a href = "https://twitter.com/" target = {"_blank"} whileHover={{y:-4}} whileTap={{scale:0.9}} className='w-7 mr-3 '><TwitterIcon /></motion.a>
    <motion.a href = "https://github.com/karanprasadgupta" target = {"_blank"} whileHover={{y:-4}} whileTap={{scale:0.9}} className='w-7 mx-3 bg-black rounded-full'><GithubIcon /></motion.a>
    <motion.a href = "https://in.linkedin.com/in/karan-prasad-gupta-49a002232" target = {"_blank"} whileHover={{y:-4}} whileTap={{scale:0.9}} className='w-7 mx-3'><LinkedInIcon /></motion.a>
    <motion.a href = "https://leetcode.com/karan20439/" target = {"_blank"} whileHover={{y:-4}} whileTap={{scale:0.9}} className='w-7 ml-3 '>
      <LeetcodeIconDark/>
    </motion.a>
    </nav>
    </div>

    <div className="absolute z-40 left-[50%] top-2 translate-x-[-50%]" >
        <Logo color={`${scrolled ? "bg-primary" : "bg-transparent"}`}/>
    </div>

</header>
</div>)
};

export default NavBar;