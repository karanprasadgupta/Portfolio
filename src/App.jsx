import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero,Works, StarsCanvas } from "./components";
import Skills from "./components/Skill";
import NaviBar from "./components/NaviBar";

const App = () => {
  return (
    <BrowserRouter>
      <div className='scroll-behaviour:smooth relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <NaviBar />
          <Hero />
        </div>
        <div className='relative z-0'>
        <About />
        <Skills />
        <StarsCanvas />
        </div>
        <div className='relative z-0'>
        <Works />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
