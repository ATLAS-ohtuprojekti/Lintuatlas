import React, { useState } from 'react'

const Species = ({ speciesList }) => { 
  const [selectedSpecies, setSpecies] = useState('')

  const select = (species) => {
    setSpecies(species.species_id)
  }

  return (
    <div>
      {speciesList.map(species => 
          <tr>
            <td><Bird key={species.id} species={species} /></td>
            <td><Button handleClick={() => select(species)} text='select' /></td>
          </tr>
      )}
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
  const species_mxcode = speciesId.substring(3)
  let url = `https://atlas-staging.rahtiapp.fi/api/grid/map/data?id=${species_mxcode}`
  console.log('url', url)
  console.log(speciesId.speciesId)
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
