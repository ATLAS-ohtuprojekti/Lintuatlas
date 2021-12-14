import { isMobile } from 'react-device-detect'


const Map = ({ speciesId, unselect }) => {
  let species_mxcode = speciesId

  if (speciesId === ''){
    species_mxcode = 'MX.25836'
  }
  
  let url = `https://atlas-staging.rahtiapp.fi/api/v1/map/${species_mxcode}/atlas/3`

  if (isMobile) {
    return (
      <div className = "Map-mobile">
        <span className="Close-icon" onClick={unselect}>x</span>
        <img 
          src = {url}
          alt = 'Species map'
        />
      </div>
    )
  } else {
    return (
      <div className = "Map">
        <img 
          src = {url}
          alt = 'Species map'
        />
      </div>
    )
  }
}

export default Map