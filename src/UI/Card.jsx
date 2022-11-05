import React from "react";

const Card = (props) => {
  return (
    <div className="h-screen w-screen bg-white rounded-tl-[25px] rounded-tr-[25px] mt-[41px] flex flex-col items-center gap-[32px]  ">
      {props.children}
    </div>
  );
};
export default Card;
