import React, { useState, useEffect } from 'react'

const Map = ({ speciesId }) => {
  const species_mxcode = speciesId.substring(3)
  let url = `https://atlas-staging.rahtiapp.fi/api/grid/map/data?id=${species_mxcode}`
  console.log('url', url)
  console.log(speciesId.speciesId)
  return (
    <div>
      <img 
        src = {url}
      />
    </div>
  )
}

export default Map