const TipOutput = (props) => {
  const btnClickHandler = () => {
    props.onResetValues();
  };
  return (
    <div className="w-[327px] h-[257px] bg-[#00474B] rounded-[15px] flex flex-col gap-[25px] sm:w-[470px] lg:h-[417px] lg:w-[413px] ">
      <div className="flex items-center justify-between mt-[39px]  ">
        <div className="flex flex-col pl-[24px] ">
          <span className="text-[16px] text-white leading-[24px] font-spacemono">
            Tip Amount
          </span>
          <span className="text-[13px] leading-[19.5px] text-[#7F9D9F] font-spacemono">
            / person
          </span>
        </div>
        <span className="text-[32px] font-spacemono text-[#26C2AE] leading-[47.5px] pr-[24px]">
          {isNaN(props.tip) ? "$0.00" : `$${props.tip}`}
        </span>
      </div>
      <div className="flex items-center justify-between lg:mb-[90px]">
        <div className="flex flex-col pl-[24px] ">
          <span className="text-[16px] text-white leading-[24px] font-spacemono ">
            Total
          </span>
          <span className="text-[13px] leading-[19.5px] text-[#7F9D9F] font-spacemono">
            / person
          </span>
        </div>
        <span className="text-[32px] font-spacemono text-[#26C2AE] leading-[47.5px] pr-[24px]">
          {isNaN(props.total) ? "$0.00" : `$${props.total}`}
        </span>
      </div>
      <button
        onClick={btnClickHandler}
        className="w-[281px] bg-[#26C2AE] ml-[24px] text-[#00474B] text-[20px] leading-[30px]
       font-spacemono pt-[9px] pb-[9px] rounded-[5px] hover:bg-[#9FE8DF] cursor-pointer sm:w-[420px] lg:w-[333px] lg:m-auto"
      >
        RESET
      </button>
    </div>
  );
};

export default TipOutput;
