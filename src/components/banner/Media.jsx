import React from 'react'
import { SiGooglescholar, SiGmail } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-2 lgl:gap-0 justify-between">
        <div>
          <div className="flex gap-2">
          More Info:
            <span className="text-lg w-8 h-8 rounded-md bg-white border border-darkColor inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
            <a href="https://scholar.google.com/citations?user=9Ojvi1sAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">
              <SiGooglescholar /></a>
            </span>
            {/* <span className="bannerIcon">
            <a href="https://github.com/LusunHCI" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span> */}
            <span className="text-lg w-8 h-8 rounded-md bg-white border border-darkColor inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
            <a href="mailto:l5sun@ucsd.edu">
              <SiGmail /></a>
            </span>
            <span className="text-lg w-8 h-8 rounded-md bg-white border border-darkColor inline-flex justify-center items-center text-darkColor hover:text-designColor duration-300 cursor-pointer">
              <a href="https://drive.google.com/file/d/1hPrNvfkp4Lb-paz3F5FdaaklT-p5tjN1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FaRegFilePdf /></a>
              </span>
          </div>
        </div>
        <div>

        </div>
      </div>
  )
}

export default Media