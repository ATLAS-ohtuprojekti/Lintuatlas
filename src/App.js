import React from 'react'
import './App.css'
import SpeciesContent from './components/SpeciesContent'


const App = () => {
  return (
    <div className="App">
      <Header />
      <SpeciesContent />
    </div>
  )
}


const Header = () => {
  return (
   <div className="App-header">
     <h1>Lintuatlas</h1>
   </div>
  )
 }


export default App
