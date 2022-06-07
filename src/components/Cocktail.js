import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ glass, image, id, info, name }) => {
  return (
    <li className="cocktail__item">
      <img src={image} alt="name" className="cocktail__image" />
      <div className="cocktail__body">
        <h2 className="cocktail__name">{name}</h2>
        <strong className="cocktail__glass">{glass}</strong>
        <p className="cocktail__info">{info}</p>
        <Link
          to={`/cocktail/${id}`}
          className="button button--primary button--details"
        >
          Details
        </Link>
      </div>
    </li>
  );
};

export default Cocktail;
