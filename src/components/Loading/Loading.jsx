import React from "react";

import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading_ctn">
      <h1> Wait for it..</h1>
      <img src={window.location.origin + "/loading.png"} />
      <h3>This page is loading...</h3>
    </div>
  );
}
