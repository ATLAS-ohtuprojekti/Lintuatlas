import React, { useState, useEffect } from 'react'


const SpeciesTable = ({ speciesList, passSelectedSpecies }) => { 
  const [selectedSpecies, setSpecies] = useState('')

  const select = (species) => {
    setSpecies(species.species_id)
    passSelectedSpecies(selectedSpecies)
  }

  return (
    <div className="Species-table">
      <tr>
        <TableHeader text="Nimi"/>
        <TableHeader text="Tieteellinen nimi"/>
      </tr>
      {speciesList.map(species => 
          <tr>
            <td><Bird key={species.id} species={species} /></td>
            <td><Button handleClick={() => select(species)} text='select' /></td>
          </tr>
      )}
    </div>
  )
}

const Bird = ({ species }) => {
  return (
    <tr>
      <SpeciesColumn text={species.speciesFI}/>
      <SpeciesColumn text={species.speciesSCI}/>
    </tr>
  )
}
  

const TableHeader = ({ text }) => {
  return (
    <th className="Table-header">{ text }</th>
  )
}

const SpeciesColumn = ({ text }) => {
  return (
    <td className="Table-column">{ text }</td>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default SpeciesTable