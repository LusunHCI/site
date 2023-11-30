import React from 'react'
import { FaRegFilePdf } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
// import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, author, conference, abs, src,pdfLink, websiteLink, tags }) => {
  return (
    <div className="w-full p-4 xl:px-6 h-auto xl:py-6 flex border-t-2 group gap-6">
      <div className="w-1/4 flex h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full object-cover hover:scale-110 border-1 duration-200 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-3/4 flex h-[80%] flex-col">
        <div className="flex items-center justify-between">
            <h3 className="text-base text-darkColor font-bold">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-8 h-8 rounded-md bg-white border border-darkColor inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href={pdfLink} target="_blank" rel="noopener noreferrer">
                <FaRegFilePdf /></a>
              </span>
              <span className="text-lg w-8 h-8 rounded-md bg-white border border-darkColor inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                <FaPlay /></a>
              </span>
            </div>
          </div>
          <h3 className="text-base text-darkColor font-normal">
            {author}
          </h3>
          <h3 className="text-base text-darkColor font-normal">
            {conference}
          </h3>
          <p className="text-sm tracking-wide mt-3 text-fadeColor">
            <span className="font-bold text-darkColor">TLDR:  </span>{abs}
          </p>
          <div className='mt-4'>
            {
              tags && tags.map((tag,index)=>{
                return (
                <span key={index} className="w-fit text-white bg-lightText bg-opacity-75 rounded-md mr-2 p-1 px-4 justify-center items-center shadow-shadowOne text-sm font-normal">
                  {tag}
                </span>
                )
              })
              }
          </div>
        </div>
    </div>
  );
}

export default ProjectsCard