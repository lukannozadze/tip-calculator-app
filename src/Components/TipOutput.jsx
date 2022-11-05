const TipOutput = () => {
  return (
    <div className="w-[327px] h-[257px] bg-[#00474B] rounded-[15px] flex flex-col gap-[25px]  ">
      <div className="flex items-center justify-between mt-[39px] ">
        <div className="flex flex-col pl-[24px] ">
          <span className="text-[16px] text-white leading-[24px] font-spacemono">
            Tip Amount
          </span>
          <span className="text-[13px] leading-[19.5px] text-[#7F9D9F] font-spacemono">
            / person
          </span>
        </div>
        <span className="text-[32px] font-spacemono text-[#26C2AE] leading-[47.5px] pr-[24px]">
          $4.27
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col pl-[24px]">
          <span className="text-[16px] text-white leading-[24px] font-spacemono">
            Total
          </span>
          <span className="text-[13px] leading-[19.5px] text-[#7F9D9F] font-spacemono">
            / person
          </span>
        </div>
        <span className="text-[32px] font-spacemono text-[#26C2AE] leading-[47.5px] pr-[24px]">
          $32.79
        </span>
      </div>
      <button className="w-[281px] bg-[#26C2AE] ml-[24px] text-[#00474B] text-[20px] leading-[30px] font-spacemono pt-[9px] pb-[9px] rounded-[5px] hover:bg-[#9FE8DF] cursor-pointer">
        RESET
      </button>
    </div>
  );
};

export default TipOutput;