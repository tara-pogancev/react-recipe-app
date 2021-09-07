import React from "react";
import "./App.css";

const Recipe = ({ title, calories, dishType, image, url }) => {
  var kcal = Math.round(calories);

  return (
    <div className="recipe">
      <div className="fill">
        <img src={image} alt=""></img>
      </div>

      <div className="v-gap-10"></div>

      <h1>{title}</h1>

      <div>
        <h3 className="uppercase">{dishType}</h3>
        <p>{kcal} kcal</p>
      </div>

      <a href={url} target="_blank" className="read-more">
        Read more
      </a>
    </div>
  );
};

export default Recipe;
