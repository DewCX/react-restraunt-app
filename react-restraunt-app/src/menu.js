import axios from 'axios';
import React, { useState } from 'react';
import './menu.css';

const Menu = () => {
  const [list, setList] = useState('alcohol-free')
  const [query, setQuery] = useState('')
  const [rcp, setRcp] = useState([])

  const MY_APP_ID = "b35eac30";
  const MY_APP_KEY = "ef7f5e7d4aae8399f392f4d4efa402f2";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}&&health=${list}`;

  async function getRecipe() {
    const result = await axios.get(url)
    setRcp(result.data.hits)
    console.log(result.data)
  }

  const submitForm = (e) => {
    e.preventDefault()
    getRecipe()
  }

  return (
    <div className="App">
      <div className="header">
        <form className="form_1" onSubmit={submitForm}>
          <input
            className='search-bar'
            type="text"
            placeholder="Enter name of product"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button-1">
            Enter
          </button>
        </form>

        <div>
          <div className="text">
            <h1>
              {' '}
              <span className="span-h1"> Recipe APP</span>{' '}
            </h1>
          </div>
          <div className="print">
            {rcp.map((item, index) => {
              return (
                <div key={index} className="product">
                  <img src={item['recipe']['image']} alt="" />
                  <p>
                    <span>Name:</span> {item['recipe']['label']}{' '}
                  </p>
                  <p>
                    <span>Calorie:</span>{' '}
                    {item['recipe']['calories'].toFixed(2)}{' '}
                  </p>
                  <div className="buttons">
                    <p>
                      {
                        <a className="a-2" href={item['recipe']['url']}>
                          Read
                        </a>
                      }
                    </p>
                    <button className="button-2">Order</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
