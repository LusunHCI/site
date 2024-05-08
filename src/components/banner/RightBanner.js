import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const RightBanner = () => {
    // const [text] = useTypewriter({
    //   words: ["Professional Coder.", "Full Stack Developer.", "Data Scientist.","Wildlife Enthusiast Capturing Wonders Through My Lens 📸"],
    //   loop: true,
    //   typeSpeed: 20,
    //   deleteSpeed: 10,
    //   delaySpeed: 2000,
    // });
  return (
    <div className="w-full lgl:w-2/3 flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">Hi, I am </h4> */}
        <h1 className="text-3xl font-bold text-bodycolor">
          Hi, I'm <span className="text-designColor capitalize"> Lu Sun | 孙露</span>
        </h1>
        {/* <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2> */}
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a fifth year PhD candidate at  <a href="https://cogsci.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="text-designColor">Cognitive Science Department </a>
         and <a href="https://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="text-designColor"> the Design Lab</a> at UC San Diego. 
        I am advised by <a href="https://spdow.ucsd.edu/" target="_blank" rel="noopener noreferrer" className="text-designColor">Prof. Steven Dow</a> and <a href="https://kvaccaro.com/" target="_blank" rel="noopener noreferrer" className="text-designColor">Prof. Kristen Vaccaro</a>.
        My research interests focus on <span className="text-designColor"> Human-Computer Interaction, HCI x NLP, Learning science, and Computational Social Science.</span>
        I explore the potentials of using AI scaffolding for knowledge work including sense-making and writing in scientific context. I develop tools to facilitate acdemic peer review. 
        I work on evaluating the faithfulness and trustworthiness in text generation from multi-stakeholder perspectives. 
        During my doctoral research, I have collaborated with 
        <a href="https://www.microsoft.com/en-us/research/" target="_blank" rel="noopener noreferrer" className="text-designColor"> Microsoft Research </a> and
        <a href="https://www.amazon.science/" target="_blank" rel="noopener noreferrer" className="text-designColor"> Amazon Science</a>.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Before entering my graduate program, I received my B.Eng. degree in Telecommunication Engineering from Beijing University of Posts and Telecommunication (BUPT) and 
        a Master degree from  <a href="https://hcii.cmu.edu/" target="_blank" rel="noopener noreferrer" className="text-designColor"> Carnegie Mellon University (CMU), Human Computer Interaction Institute (HCII)</a>, specializing in Learning Science. 
        During my time at CMU, I was fortunate to work with <a href="https://kraut.hciresearch.info/" target="_blank" rel="noopener noreferrer" className="text-designColor">Prof. Robert E. Kraut</a>, 
        <a href="https://cs.stanford.edu/~diyiy/" target="_blank" rel="noopener noreferrer" className="text-designColor">Prof. Diyi Yang</a>, <a href="https://pact.cs.cmu.edu/koedinger.html" target="_blank" rel="noopener noreferrer" className="text-designColor">Prof. Ken Koedinger</a>, and   <a href="http://www.justinecassell.com/" target="_blank" rel="noopener noreferrer" className="text-designColor">Prof. Justine Cassell</a> .
        Out of my research, I like participating mentorship program to support women in computing and teaching HCI courses. 
        I am a Taekwondo player and I play violin and tennis.
        </p>
        <div className="flex flex-col gap-2">
        <div className='mt-1'>
          <span className="w-fit text-darkColor bg-blue-300 bg-opacity-75 rounded-md mr-2 p-1 px-4 justify-center items-center shadow-shadowOne text-sm font-medium">
            Human-Computer Interaction
          </span>
          <span className="w-fit text-darkColor bg-blue-300 bg-opacity-75 rounded-md mr-2 p-1 px-4 justify-center items-center shadow-shadowOne text-sm font-medium">
          HCI x NLP
          </span>
          <span className="w-fit text-darkColor bg-blue-300 bg-opacity-75 rounded-md mr-2 p-1 px-4 justify-center items-center shadow-shadowOne text-sm font-medium">
          Learning science
          </span>
          <span className="w-fit text-darkColor bg-blue-300 bg-opacity-75 rounded-md mr-2 p-1 px-4 justify-center items-center shadow-shadowOne text-sm font-medium">
          Computational Social Science
          </span>
        </div>
        <div className='mt-0'>
          <span className="w-fit text-darkColor bg-blue-300 bg-opacity-75 rounded-md mr-2 p-1 px-4 justify-center items-center shadow-shadowOne text-sm font-medium">
           LLM scaffolding for sense-making and writing
          </span>
          <span className="w-fit text-darkColor bg-blue-300 bg-opacity-75 rounded-md mr-2 p-1 px-4 justify-center items-center shadow-shadowOne text-sm font-medium">
          Human-AI collaboration for academic peer review
          </span>
        </div>
        <div className='mt-0'>
          <span className="w-fit text-darkColor bg-blue-300 bg-opacity-75 rounded-md mr-2 p-1 px-4 justify-center items-center shadow-shadowOne text-sm font-medium">
          faithfulness and trustworthiness in text generation and evaluation
          </span>
        </div>
        </div>
      </div>
     <Media />
    </div>
  );
}

export default RightBanner