import React from 'react'
import Venera from '../../Images/Venera.png'
import Aisulu from '../../Images/Aisulu.png'
import Tom from '../../Images/Tom.png'
import Valeria from '../../Images/Valeria.png'
import Artur from '../../Images/Artur.png'

export const Placereviews = () => {
  return (
    <>
    <div className="reviewsText">
              <div className="reviewsCount"><h2>ОТЗЫВЫ (43)</h2></div>
              <div className="reviewsLeave"><span>Как оставить отзыв?</span></div>
            </div>
            <div className='reviewsDisplay'>
              <div className="reviewslist">
                <div><img src={Venera} alt=""/></div> 
                <div><h3>Венера</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
              <div className="reviewslist">
                <div><img src={Aisulu} alt=""/></div> 
                <div><h3>Айсулуу</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
             
              <div className="reviewslist">
                <div><img src={Tom} alt=""/></div> 
                <div><h3>Tom</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
              <div className="reviewslist">
                <div><img src={Valeria} alt=""/></div> 
                <div><h3>Валерия</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
              <div className="reviewslist">
                <div><img src={Artur} alt=""/></div> 
                <div><h3>Артур</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
            </div>
    </>
  )
}
export default Placereviews