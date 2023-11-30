import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo,testimonialThree, quote } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Mentorship = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="mentorship"
      className="w-full py-8 border-b-[1px] border-b-black"
    >
      <div className="flex justify-left items-center text-center">
        <Title title="Diversity and Mentorship"  />
      </div>
      <br></br>
      <div className="grid grid-cols-1 gap-4">
      <div>
        <div class="bg-white text-darkColor font-bold rounded-t px-4 py-0">
         Teaching assistant
        </div>
        <div class=" border-grey-400 rounded- bg-white0 px-4 py-3">
          <div className="w-full flex justify-left rounded px-4">
          <ul class="list-disc">
            <li>Design 100 Prototyping</li>
            <li>COGS 123 Social Computing</li>
            <li>COGS 160 Civic Design</li>
        </ul>
        </div>
        </div>
      </div>
      </div>
      <div>
        <div class="bg-white text-darkColor font-bold rounded-t px-4 py-0">
        Mentorship
        </div>
        <div class=" border-grey-400 rounded- bg-white0 px-4 py-3">
          <div className="w-full flex justify-left rounded px-4">
          <ul class="list-disc">
            <li>Bei Pei (Grad Women in Computing Organization Mentees)</li>
            <li>Yutong Chen (Currently graduate student at CMU)</li>
            <li>Mingyuan Liu (Currently graduate student at UC San Diego)</li>
            <li>Stone Tao (Currently Phd student at UC San Diego)</li>
            <li>Yuhan Liu (Currently Phd student at Princeton University)</li>
        </ul>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Mentorship