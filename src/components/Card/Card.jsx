import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export default function Card(props) {
  const {
    data: { id, image, name },
    linkTo,
  } = props;

  return (
    <div className="card" key={id}>
      <img src={image} alt={name} />
      <Link className="btn__link" to={linkTo}>
        {name}
      </Link>
    </div>
  );
}
