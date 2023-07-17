import React from "react";

const SelectPercentage = ({ percentage, onSelect, children }) => {
  return (
    <div>
      <label>
        {children}
        <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
          <option value={0}>Disatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely Amazing! (20%)</option>
        </select>
      </label>
    </div>
  );
};

export default SelectPercentage;
