import React, { useEffect, useState} from 'react';
import './App.css';

const App = () =>{
  const APP_ID = "{e4f42e6d}";
  const APP_KEY = "{f8c601baf9b3e7a62e2cef8c0b5c87fb}"

  const exampleReq = {/* `URL` */}

  const[recipes, setRecipes] = useState([]);
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


  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar type="text'/>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};


export default App;
