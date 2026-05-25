import React, { useState, useRef, useEffect } from "react";

function PrevInput() {
  const [value, setValue] = useState("");
  const prevValueRef = useRef("");

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <h2>Current: {value}</h2>
      <h3>Previous: {prevValueRef.current}</h3>
    </div>
  );
}

export default PrevInput;