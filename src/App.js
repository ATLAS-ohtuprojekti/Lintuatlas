import React from 'react'
import './App.css'
import Species from './components/Species'
import axios from 'axios'


const App = () => {
  const birdListUrl = "https://atlas-staging.rahtiapp.fi/api/birds"
  
  const birds = () => {
    axios
      .get({ birdListUrl })
      .then((response) => {
        console.log(response)
        const birds = response.data
        console.log(birds)
        return birds
    }, (error) => {
        return console.log(error)
    })
  }

  
  return (
    
    <div className="App">
      <Header />
      <Species speciesList = {birds} />
    </div>
  )
}


const Header = () => {
  return (
   <div>
     <h1>Lintuatlas</h1>
     <p>Tähän tulee uusi lintuatlas.</p>
   </div>
  )
 }


export default App;
