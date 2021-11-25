import React, { useState, useEffect } from 'react'
import SpeciesTable, { selectedSpecies } from './SpeciesTable'
import Map from './Map'
import axios from 'axios'


const SpeciesContent = () => {
  const [selectedSpecies, setSelectedspecies] = useState("")
  
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
    <div className="Species-content">
      <SpeciesTable speciesList={speciesList} passSelectedSpecies={setSelectedspecies} />
      <Map speciesId={selectedSpecies} />
    </div>
  )
}

export default SpeciesContent