import React from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";
import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  const [hide, setHide] = useState(false);

  const handleReset = () => {
    setBill("");
    setPercentage1("");
    setPercentage2("");
  };

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service
      </SelectPercentage>
      {bill>0 &&
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} hide={hide} setHide={setHide} />
        </>
      }
    </div>
  );
};

export default App;
