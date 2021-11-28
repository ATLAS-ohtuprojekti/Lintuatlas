import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'


const Map = ({ speciesId, unselect }) => {
  let species_mxcode = speciesId.substring(3)

  if (speciesId === ''){
    species_mxcode = 25836
  }
  
  let url = `https://atlas-staging.rahtiapp.fi/api/grid/map/data?id=${species_mxcode}`

  if (isMobile) {
    return (
      <div className = "Map-mobile">
        <span className="Close-icon" onClick={unselect}>x</span>
        <img 
          src = {url}
        />
      </div>
    )
  } else {
    return (
      <div className = "Map">
        <img 
          src = {url}
        />
      </div>
    )
  }
}

export default Map