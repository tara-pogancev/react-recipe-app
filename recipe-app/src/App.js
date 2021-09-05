import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '66e8ce7e';
  const APP_KEY = '42c7b738e502be7a8d134a8a62b766b0';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(async () => {
    getRecipes();

  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);    
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    var element = document.getElementById('input-form');
    element.value = "";
  }

  return(

    <div className="App">
      <h1 class="Title">Let's search for recipes!</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input id="input-form" type="text" className="SearchBar" onChange={updateSearch} placeholder="Search..."></input>
        <button type="submit" className="search-button">
          GO
        </button>
      </form>

      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.url} 
          title={recipe.recipe.label} 
          dishType={recipe.recipe.dishType}
          calories={recipe.recipe.calories} 
          url={recipe.recipe.url}
          image={recipe.recipe.image}/>
      ))};

    </div>
  );
}

export default App;
