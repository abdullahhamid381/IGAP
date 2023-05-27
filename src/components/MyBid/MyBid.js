import React from "react";

function MyBid(props) {
  return (
    <div style={{ borderWidth: 1, bprderRounded: 10, borderColor: "green", backgroundColor:"green", color:"white" }}>
      <p>job title: {props.jobTitle}</p>
      <p>job Description: {props.jobDesc}</p>
      <p>you bid budget: {props.bidBudget}</p>
      <p>you bid days: {props.bidDays}</p>
    </div>
  );
}

export default MyBid;
