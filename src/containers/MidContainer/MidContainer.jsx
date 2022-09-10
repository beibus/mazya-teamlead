import React from 'react'
import salad from '../../Images/salad.png'
import './MidContainer.css'

const MidContainer = () => {
  return (
    <div className='mid-container'>
      <div className='mid-content'>
        <div className='content-title'>
          <div className='title-wrapper'>
            <h2>Удобно и Вкусно</h2>
            <div className='content-description'>
              <h3>
                Мы являемся каталогом <span className='green'>Chtopoest</span> ресторанов/кафе/баров/кофеен Бишкека
              </h3>
              <h4>
                Уникальность продукта заключается в том, что каталог позволяет найти все заведения города на одной платформе
              </h4>
            </div>
          </div>
          <div className='mid-image'><img src={salad} alt="" /></div>
        </div>

      </div>
      <div className='mid-button'><button>Создать аккаунт</button></div>
    </div>
  )
}


export default MidContainer