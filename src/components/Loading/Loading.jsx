import React from "react";

import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading_ctn">
      <h1> Wait for it..</h1>
      <img src="loading.png" alt="loading" />
      <h3>This page is loading...</h3>
    </div>
  );
}
