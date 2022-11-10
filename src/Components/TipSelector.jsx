import React, { useState, useEffect } from "react";
import CustomTipInput from "./CustomTipInput";
const TipSelector = (props) => {
  const [tipValue, setTipValue] = useState("");
  const [active, setActive] = useState(null);
  const percentValuesArr = [5, 10, 15, 25, 50];
  const percentBtnClickHandler = (e) => {
    setTipValue(e.target.value);
    setActive(e.target.value);
  };

  useEffect(() => {
    props.onGetTipValue(tipValue);
  }, [tipValue]);

  useEffect(() => {
    if (props.resetClicked) {
      setActive(null);
      props.setResetClicked(!props.resetClicked);
    }
  }, [props.resetClicked]);
  return (
    <div>
      <span className="font-spacemono text-[#5E7A7D] text-[16px] leading-[24px] ">
        Select Tip %
      </span>
      <ul className="grid grid-cols-2 gap-[16px] mt-[16px] mb-[32px] sm:grid-cols-3 lg:gap-[14px]">
        {percentValuesArr.map((value) => {
          return (
            <li key={Math.random().toString()}>
              <button
                onClick={percentBtnClickHandler}
                value={value}
                className={`w-[146px] bg-[#00474B] font-spacemono text-[24px] 
              leading-[35.5px] text-[white] pt-[6px] pb-[6px] hover:text-[#00474B] hover:bg-[#9FE8DF] rounded-[5px] cursor-pointer lg:w-[117px] ${
                active == value ? "bg-[#9FE8DF]" : ""
              }`}
              >{`${value}%`}</button>
            </li>
          );
        })}
        <CustomTipInput
          value={tipValue}
          onSetTipValue={setTipValue}
          onTipValue={tipValue}
          onSetActive={setActive}
          resetClicked={props.resetClicked}
        />
      </ul>
    </div>
  );
};

export default TipSelector;
