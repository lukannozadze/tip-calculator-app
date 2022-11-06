import { Fragment } from "react";
import Header from "./Components/Header";
import InputBill from "./Components/InputBill";
import TipSelector from "./Components/TipSelector";
import Card from "./UI/Card";
import NumPeopleInput from "./Components/NumPeopleInput";
import TipOutput from "./Components/TipOutput";
function App() {
  return (
    <Fragment>
      <div className="h-screen bg-[#C5E4E7]">
        <Header />
        <main>
          <Card>
            <div className="lg:flex flex-row items-center lg:gap-[48px]">
              <div className="mb-[32px] ">
                <InputBill />
                <TipSelector />
                <NumPeopleInput />
              </div>
              <TipOutput />
            </div>
          </Card>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
