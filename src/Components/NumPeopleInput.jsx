import React, { useState } from "react";
import personPath from "../Images/person-icon.png";
const NumPeopleInput = (props) => {
  const [numPeople, setNumPeople] = useState("");

  const numPeopleInputChangeHandler = (e) => {
    props.onGetNumPeople(e.target.value);
    setNumPeople(e.target.value);
  };
  console.log(numPeople);
  return (
    <form>
      <label className="flex flex-col gap-[6px]">
        <div className="flex gap-[25px] lg:gap-[94px] sm:gap-[184px]">
          <span className="text-[16px] text-[#5E7A7D] leading-[24px] font-spacemono">
            Number of People
          </span>
          <span
            className={`text-[16px] text-[#E17457]  leading-[24px] font-spacemono text-right  ${
              numPeople === "0" ? "block" : "hidden"
            }`}
          >
            Can't be zero
          </span>
        </div>
        <div className="relative flex items-center">
          <img
            className="absolute pl-[19px]"
            src={personPath}
            alt="dollar symbol"
          />
          <input
            onChange={numPeopleInputChangeHandler}
            className={`w-[311px] bg-[#F3F9FA] text-[#00474B] text-[24px] leading-[35.5px] font-spacemono pt-[6px] pb-[6px] rounded-[5px] text-right pr-[17.5px] outline-none  hover:border-2 hover:border-[#26C2AE] cursor-pointer sm:w-[470px] lg:w-[379px] ${
              numPeople === "0"
                ? "border-2 border-[#E17052] hover:border-[#E17052]"
                : ""
            } `}
            type="number"
            value={props.numPeople || ""}
            name="numOfPeople"
            placeholder="0"
          ></input>
        </div>
      </label>
    </form>
  );
};

export default NumPeopleInput;
