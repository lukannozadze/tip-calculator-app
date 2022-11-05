import personPath from "../Images/person-icon.png";
const NumPeopleInput = (props) => {
  return (
    <form>
      <label className="flex flex-col gap-[6px]">
        <span className="text-[16px] text-[#5E7A7D] leading-[24px] font-spacemono">
          Number of People
        </span>
        <div className="relative flex items-center">
          <img
            className="absolute pl-[19px]"
            src={personPath}
            alt="dollar symbol"
          />
          <input
            className="w-[311px] bg-[#F3F9FA] text-[#00474B] text-[24px] leading-[35.5px] font-spacemono pt-[6px] pb-[6px] rounded-[5px]
             text-right pr-[17.5px] outline-none  hover:border-2 hover:border-[#26C2AE] cursor-pointer"
            type="text"
            name="numOfPeople"
            placeholder="0"
          ></input>
        </div>
      </label>
    </form>
  );
};

export default NumPeopleInput;
