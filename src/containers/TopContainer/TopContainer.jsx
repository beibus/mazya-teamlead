import React from 'react'

import './TopContainer.css'
import Navigation from '../../components/Navigation/Navigation'
import Welcome from '../../components/Welcome/Welcome'
import Input from '../../components/Input/Input'
import data from '../CategoryContainer/data.json'


function TopContainer() {

  console.log('data', data);
  console.log('data-res', data.results);
  console.log('data-res-0', data.results);
  console.log('data', data);


  return (
  <div className="Top-container">
    <div className='Top-banner'>

    </div>
    <div className='Top-content'>
      <Navigation />

      <Welcome />
      <Input />
    </div>
    <div className='Top-banner'></div>
  </div>
  )
}

export default TopContainer;