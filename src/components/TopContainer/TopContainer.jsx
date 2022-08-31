import React from 'react'

import './TopContainer.css'
import Navigation from '../Navigation/Navigation'
import Welcome from '../Welcome/Welcome'
import Input from '../Input/Input'


function TopContainer() {

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