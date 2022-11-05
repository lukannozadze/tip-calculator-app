import CustomTipInput from "./CustomTipInput";
const TipSelector = () => {
  const percentValuesArr = [5, 10, 15, 25, 50];
  return (
    <div>
      <span className="font-spacemono text-[#5E7A7D] text-[16px] leading-[24px] ">
        Select Tip %
      </span>
      <ul className="grid grid-cols-2 gap-[16px] mt-[16px]">
        {percentValuesArr.map((value) => {
          return (
            <li key={Math.random().toString()}>
              <button
                className="w-[146px] bg-[#00474B] font-spacemono text-[24px] 
              leading-[35.5px] text-[white] pt-[6px] pb-[6px] hover:text-[#00474B] hover:bg-[#9FE8DF] rounded-[5px] cursor-pointer"
              >{`${value}%`}</button>
            </li>
          );
        })}
        <CustomTipInput />
      </ul>
    </div>
  );
};

export default TipSelector;
