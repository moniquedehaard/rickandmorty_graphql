import React from "react";

import "./NotFoundPage.css";

export default function NotFound() {
  return (
    <div className="nf_container">
      <div className="notFound">
        <h1> Oops something went terrible wrong...</h1>
        <img src={window.location.origin + "/notfound.png"} />
        <br />
        <h4> Go back to home</h4>
      </div>
    </div>
  );
}
