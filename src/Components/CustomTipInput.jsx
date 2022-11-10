import React, { useState } from "react";
const CustomTipInput = (props) => {
  const customInputChangeHandler = (e) => {
    props.onSetTipValue(e.target.value);
    props.onSetActive("");
  };

  return (
    <input
      onChange={customInputChangeHandler}
      type="number"
      id="customTipInput"
      name="customTipInput"
      placeholder="Custom"
      className="w-[146px] bg-[#F3F9FA] font-spacemono text-[24px] leading-[35.5px]  pt-[6px] pb-[6px] rounded-[5px] text-right pr-[17.5px] placeholder-[#547878] outline-none cursor-pointer hover:border-2 hover:border-[#26C2AE] lg:w-[117px]"
    ></input>
  );
};

export default CustomTipInput;
