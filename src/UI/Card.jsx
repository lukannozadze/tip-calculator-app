import React from "react";

const Card = (props) => {
  return (
    <div className="h-screen w-screen bg-white rounded-tl-[25px] rounded-tr-[25px] mt-[41px] flex flex-col items-center lg:w-[920px] lg:h-[481px] lg:m-auto lg:justify-center lg:rounded-[25px] lg:mt-[88px] ">
      {props.children}
    </div>
  );
};
export default Card;
