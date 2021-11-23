import React, { useState, useEffect } from 'react'
import './App.css'
import Species from './components/Species'
import axios from 'axios'


const App = () => {
  const birdListUrl = "https://atlas-staging.rahtiapp.fi/api/birds"
  const [speciesList, getList] = useState([])

  const getBirdList = () => {
    console.log('getBirdList')
    axios
      .get(birdListUrl)
      .then((response) => {
        console.log('Linnut')
        console.log(response) 
        const birdList = response.data
        console.log(birdList)
        getList(birdList)
    }, (error) => {
        return console.log(error)
    })
  }

  useEffect(getBirdList, [])
  
  return (
    
    <div className="App">
      <Header />
      <Species speciesList = {speciesList} />
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
