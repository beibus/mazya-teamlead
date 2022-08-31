import React from 'react'
import './Navigation.css'
import heart from '../../Images/heart.png'
import user from '../../Images/user.png'

const Navigation = () => {
  return (
    <div className='Navigation'>
        <div className='Navigation-options'>
          <a className='Option' href="#news">Главная</a>
          <select className='Option' name="select" id="selectPlace">
            <option value="" selected disabled hidden>Все заведения</option>
            <option value="Cafe">Кафе</option>
            <option value="Restaurant">Рестораны</option>
            <option value="Cofeeshop">Кофейни</option>
            <option value="Bar">Бары</option>
            <option value="Nightclub">Ночные клубы</option>
          </select>
          <a className='Option' href="#about">Акции</a>
        </div>
        <div className='Navigation-icons'>
          <div className='Option-right'><img src={heart} alt="" /></div>
          <div className='Option-right'><img src={user} alt="" /></div>
        </div>
      </div>
  )
}

export default Navigation