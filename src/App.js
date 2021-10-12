import React from 'react';
import './App.css';

const App = (props) => {
  const {species} = props
  
  return (
    <div className="App">
      <header className="Lintuatlas">
        <h1>Lintuatlas</h1>

        <p>Tähän tulee uusi lintuatlas.</p>
        <img 
          src="https://atlas-staging.rahtiapp.fi/api/grid/map/data?id=25836"
          alt="new"
        />
        <div>
          Lista linnuista:
          {species}
        </div>
        
      </header>
    </div>
  );
}

export default App;
