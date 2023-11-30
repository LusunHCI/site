import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-4">
      {/* <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
       {title}
      </h3> */}
      <h1 className="text-2xl md:text-lgl text-designColor font-bold capitalize">{title}</h1>
    </div>
  );
}

export default Title