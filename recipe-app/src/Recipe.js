import React from 'react';

const Recipe = ({title, calories, dishType, image, url}) => {
    
    var kcal = Math.round(calories);

    return (
        <div>
            <h1>{title}</h1>
            <h3>{dishType}</h3>
            <p>{kcal} kcal</p>
            <img src={image} alt=""></img>
            <a href={url} target="_blank">Read more</a>
        </div>
    );
}

export default Recipe;