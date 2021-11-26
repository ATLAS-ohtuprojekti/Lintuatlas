import React, { useState, useEffect } from 'react'

const Map = ({ speciesId }) => {
  let species_mxcode = speciesId.substring(3)

  if (speciesId === ''){
    species_mxcode = 25836
  }
  
  let url = `https://atlas-staging.rahtiapp.fi/api/grid/map/data?id=${species_mxcode}`
  return (
    <div className = "Map">
      <img 
        src = {url}
      />
    </div>
  )
}

export default Map