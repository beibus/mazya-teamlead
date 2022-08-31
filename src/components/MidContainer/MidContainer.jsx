import React from 'react'
import salad from '../../Images/salad.png'
import './MidContainer.css'

const MidContainer = () => {
  return (
    <div className='Mid-container'>
        <div className='Mid-content'>
          <div className='Content-title'>
            <h2>Удобно и Вкусно</h2>
          </div>
          <div className='Content-description'>
            <h3>
              Мы являемся каталогом <span className='Green'>Chtopoest</span> ресторанов/кафе/баров/кофеен Бишкека.
              Уникальность продукта заключается в том, что каталог позволяет найти все
              заведения города на одной платформе
            </h3>
          </div>
        </div>
        <div className='Mid-image'><img src={salad} alt="" /></div>
        <div className='Mid-button'><button>Создать аккаунт</button></div>
      </div>
  )
}

export default MidContainer