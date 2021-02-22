import React, { useEffect, useState } from "react";

// STYLES
import "./HomePage.css";

export default function HomePage(props) {
  const [searchTermHome, setSearchTermHome] = useState("");

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" && searchTermHome) {
        props.history.push({
          pathname: "/search",
          state: { search: searchTermHome },
        });
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [searchTermHome]);

  return (
    <div className="container_home">
      <div className="container_left">
        <h1>
          Rick <br />& Morty API
        </h1>

        <div className="verticalLine">
          <p>
            Find your favorites rick and morty <br /> character
          </p>
        </div>

        <div>
          <input
            className="searchBar"
            placeholder="Find your character and press <ENTER>"
            onChange={(e) => setSearchTermHome(e.target.value)}
          />
        </div>
      </div>

      <div className="container_right">
        <img src="homepage.png" alt="rickandmorty" />
      </div>
    </div>
  );
}
