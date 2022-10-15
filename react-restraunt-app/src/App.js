import React, { useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () =>{
  const APP_ID = "e4f42e6d";
  const APP_KEY = "f8c601baf9b3e7a62e2cef8c0b5c87fb";

  const exampleReq = {/* `URL` */}

  const[recipes, setRecipes] = useState([]);
  const[search,setSearch] = useState("");
  const[query, setQuery] = useState("chicken");



  useEffect(() => {
    getRecipes();
  }, [])


  const getRecipes = async() => {
    const response = await fetch(
      `https://api.edemam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventdefault();
    setQuery(search);
  }


  return (
    <div className='App'>
      <h1>Search Bar</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};


export default App;
