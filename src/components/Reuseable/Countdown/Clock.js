import React from "react";
import Timer from "./Timer";



const Clock = () => {
  const targetDate = "2023-06-01T00:00:00Z";

  return (
    <div>
    
      <Timer targetDate={targetDate} />
    </div>
  );
};

export default Clock;
