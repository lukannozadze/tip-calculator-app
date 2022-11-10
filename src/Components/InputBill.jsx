import dollarPath from "../Images/dollar-icon.png";
const InputBill = (props) => {
  const inputBillChangeHandler = (e) => {
    props.onGetBill(e.target.value);
  };

  return (
    <form className="mt-[32px]">
      <label className="flex flex-col gap-[6px]">
        <span className="text-[16px] text-[#5E7A7D] leading-[24px] font-spacemono">
          Bill
        </span>
        <div className="relative flex items-center">
          <img
            className="absolute pl-[19px] pb-[30px]"
            src={dollarPath}
            alt="dollar symbol"
          />
          <input
            className="w-[311px] bg-[#F3F9FA] text-[#00474B] text-[24px] leading-[35.5px] font-spacemono pt-[6px] pb-[6px] rounded-[5px]
             text-right pr-[17.5px] outline-none hover:border-2 hover:border-[#26C2AE] cursor-pointer mb-[32px] sm:w-[470px] lg:w-[379px]"
            type="number"
            pattern="[0-9]*"
            value={props.billValue || ""}
            name="bill"
            placeholder="0"
            onChange={inputBillChangeHandler}
          ></input>
        </div>
      </label>
    </form>
  );
};

export default InputBill;
