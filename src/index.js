import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'

ReactDOM.render(
  <App species={getBirds()}/>,    
  document.getElementById('root')
)

function getBirds() {
  axios
  .get("https://atlas-staging.rahtiapp.fi/api/birds")
  .then(response => {
    const birds = response.data
    return birds  
  })
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
