import React from 'react'
import './Welcome.css'
import vilki from '../../Images/vilki.png'



const Welcome = () => {
  return (
    <div className='Welcome-message'>
        <div className='logo-wrapper'>
          <img className='VilkiImage' src={vilki} alt="" />
          <h3 className='logo-word'>Chtopoest</h3>
        </div>
        <div className='welcome-wrapper'>
          <h1>Добро пожаловать в Бишкек! </h1>
        </div>
      </div>
  )
}

export default Welcome