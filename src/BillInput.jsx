import React from "react";

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div>
      <label>How Much was the bill?</label>{" "}
      <input type="number" value={bill} onChange={(e)=>onSetBill(+e.target.value)} placeholder="Bill value" />
    </div>
  );
};

export default BillInput;
