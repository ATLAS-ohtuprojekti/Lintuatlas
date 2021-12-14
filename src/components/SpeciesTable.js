import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'


const SpeciesTable = ({ speciesList, passSelectedSpecies }) => { 
  const [selectedSpecies, setSpecies] = useState('')

  const select = (species) => {
    setSpecies(species.species_id)
    passSelectedSpecies(species.species_id)
  }

  if (isMobile) {
    return (
      <div className="Table-mobile">
        <div className="Table-header">
          <tr>
            <TableHeader text="Nimi"/>
            <TableHeader text="Tieteellinen nimi"/>
          </tr>
        </div>
        <div className="Species-table">
          {speciesList.map(species => 
              <tr onClick={() => select(species)}>
                <td><Bird key={species.id} species={species} selectedSpecies={selectedSpecies}/></td>
              </tr>
          )}
        </div>
      </div>
    )
  } else {
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
                <td><Bird key={species.id} species={species} selectedSpecies={selectedSpecies}/></td>
              </tr>
          )}
        </div>
      </div>
    )  
  }
}

const Bird = ({ species, selectedSpecies}) => {
  console.log('speciesid: ', species.species_id)
  console.log('selectedspecies: ', selectedSpecies)
  if (species.species_id === selectedSpecies) {
    console.log('speciesid: ', species.id)
    return (
      <tr className="Selected-species">
        <SpeciesColumn text={species.speciesFI}/>
        <SpeciesColumn text={species.speciesSCI}/>
      </tr>
    )
  }
  return (
    <tr>
      <SpeciesColumn text={species.speciesFI}/>
      <SpeciesColumn text={species.speciesSCI}/>
    </tr>
  )
}
  

const TableHeader = ({ text }) => {
  if (isMobile) {
    return (
      <td className="Table-column-mobile">{ text }</td>
    )
  } else {
    return (
      <th className="Table-column">{ text }</th>
    )
  }
}

const SpeciesColumn = ({ text }) => {
  if (isMobile) {
    return (
      <td className="Table-column-mobile">{ text }</td>
    )
  } else {
    return (
      <td className="Table-column">{ text }</td>
    )
  }  
}

export default SpeciesTable