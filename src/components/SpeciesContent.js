import React, { useState, useEffect } from 'react'
import SpeciesTable from './SpeciesTable'
import Map from './Map'
import axios from 'axios'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'


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

  const unselectSpecies = () => {
    setSelectedspecies("")
  }

  
  if (isMobile && selectedSpecies === "") {
    return (  
      <div className="Species-content-mobile">
        <SpeciesTable speciesList={speciesList} passSelectedSpecies={setSelectedspecies} />
      </div>
    )
  } else if (isMobile) {
    return (  
      <div className="Species-content-mobile">
        <SpeciesTable speciesList={speciesList} passSelectedSpecies={setSelectedspecies} />
        <Map speciesId={selectedSpecies} unselect={unselectSpecies} />
      </div>
    )
  }

  return (  
    <div className="Species-content">
      <SpeciesTable speciesList={speciesList} passSelectedSpecies={setSelectedspecies} />
      <Map speciesId={selectedSpecies}/>
    </div>
  )
}


export default SpeciesContent