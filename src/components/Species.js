import React, { useState } from 'react'

const Species = ({ speciesList }) => { 
  const [selectedSpecies, selectSpecies] = useState(0)

  const select = (species) => {
    selectSpecies({species})
  }

  return (
    <div>
      {speciesList.map(species => 
          <tr>
            <td><Bird key={species.id} species={species} /></td>
            <td><Button handleClick={select({species.id})} text='select' /></td>
          </tr>
      )}
    </div>
    <div>
      <Map speciesId={selectedSpecies} />
    </div>
  )
}

const Bird = ({ species }) => {
  return (
    <tr>
      <td>{species.speciesFI}</td>
      <td>{species.speciesSCI}</td>
    </tr>
  )
}
  
const Map = ({ speciesId }) => {
  let url = ("https://atlas-staging.rahtiapp.fi/api/grid/map/data?id=", id)
  return (
    <div>
      <img 
        src = {url}
        alt = "new"
      />
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default Species