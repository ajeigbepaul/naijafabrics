import React from "react";
import "./SelectInput.css";

function SelectAnkaraSize({ name, onChange, value }) {
  return (
    <div className="selectcontainer">
      <select name={name} onChange={onChange} value={value}>
        <option value="">Select Size</option>
        <option value="none">None</option>
        <option value="3 yrds">3 yards</option>
        <option value="6 yrds">6 yards</option>
        <option value="9 yrds">9 yards</option>
        <option value="12 yrds">12 yards</option>
      </select>
    </div>
  );
}

export default SelectAnkaraSize;
