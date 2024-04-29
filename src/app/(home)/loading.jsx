import React from "react";


import "./loading.css"

const Loading = () => {
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize:"3rem"
      }}
    >
      Loading
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </h1>
  );
};

export default Loading;
