import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Header from "./Components/Header";
import InputBill from "./Components/InputBill";
import TipSelector from "./Components/TipSelector";
import Card from "./UI/Card";
import NumPeopleInput from "./Components/NumPeopleInput";
import TipOutput from "./Components/TipOutput";

function App() {
  const [billValue, setBillValue] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [tipPercentValue, setTipPercentValue] = useState("");
  const [total, setTotal] = useState("");
  const [tip, setTip] = useState("");
  const [resetClicked, setResetClicked] = useState(false);

  const getBill = (data) => {
    setBillValue(data);
  };
  const getNumPeople = (data) => {
    setNumPeople(data);
  };
  const getTipValue = (data) => {
    setTipPercentValue(data);
  };
  useEffect(() => {
    setTotal(
      parseFloat(billValue) / parseInt(numPeople) +
        (parseFloat(billValue) / parseInt(numPeople)) *
          (parseInt(tipPercentValue) / 100)
    );
    setTip(
      (parseFloat(billValue) / parseInt(numPeople)) *
        (parseInt(tipPercentValue) / 100)
    );
  }, [billValue, numPeople, tipPercentValue]);
  const resetValues = () => {
    setResetClicked(true);
    setTip("");
    setTotal("");
    setBillValue("");
    setNumPeople("");
    setTipPercentValue("");
  };
  return (
    <Fragment>
      <div className="h-screen bg-[#C5E4E7]">
        <Header />
        <main>
          <Card>
            <div className="lg:flex flex-row items-center lg:gap-[48px]">
              <div className="mb-[32px] ">
                <InputBill onGetBill={getBill} billValue={billValue} />
                <TipSelector
                  onGetTipValue={getTipValue}
                  resetClicked={resetClicked}
                  setResetClicked={setResetClicked}
                />
                <NumPeopleInput
                  onGetNumPeople={getNumPeople}
                  numPeople={numPeople}
                />
              </div>
              <TipOutput
                total={String(parseFloat(total).toFixed(2))}
                tip={String(parseFloat(tip).toFixed(2))}
                onResetValues={resetValues}
              />
            </div>
          </Card>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
