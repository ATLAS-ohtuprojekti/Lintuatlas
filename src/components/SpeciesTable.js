import React, { useState, useEffect } from 'react'


const SpeciesTable = ({ speciesList, passSelectedSpecies }) => { 
  const [selectedSpecies, setSpecies] = useState('')

  const select = (species) => {
    setSpecies(species.species_id)
    passSelectedSpecies(species.species_id)
  }

  return (
    <div className="Table">
      <div className="Table-header">
        <tr>
          <TableHeader text="Nimi"/>
          <TableHeader text="Tieteellinen nimi"/>
        </tr>
      </div>
      <div className="Species-table">
        {speciesList.map(species => 
            <tr onClick={() => select(species)}>
              <td><Bird key={species.id} species={species} /></td>
            </tr>
        )}
      </div>
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
    <th className="Table-column">{ text }</th>
  )
}

const SpeciesColumn = ({ text }) => {
  return (
    <td className="Table-column">{ text }</td>
  )
}


// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

export default SpeciesTable