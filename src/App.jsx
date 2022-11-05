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
            <InputBill />
            <TipSelector />
            <NumPeopleInput />
            <TipOutput />
          </Card>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
