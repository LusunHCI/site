import React from 'react'
import { bannerImg } from "../../assets/index";

const LeftBanner = () => {
  return (
    <div className="w-full lgl:w-1/3 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[300px] lgl:h-[300px] z-50 rounded-full"
        layout="fill" 
        src={bannerImg}
        alt="bannerImg"
      />
      {/* <div className="absolute top-0 w-[300px] h-[300px] lgl:w-[300px] lgl:h-[300px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-full"></div> */}
    </div>
  );
}

export default LeftBanner