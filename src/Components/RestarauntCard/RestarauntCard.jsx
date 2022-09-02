import React from 'react'
import Adress from '../../Images/AdressLogo.png'
import heart from '../../Images/heart.png'
import Call from '../../Images/Vector.png'
import './RestarauntCard.css'

function RestarauntCard({image,name,address}) {
  return (
    <div className="place-wrapper">
            <div className="place-image">
                <img src={image} />
            </div>
            <div className="contacts-wrapper">
                <div className="contact-item">
                    <img src={Call} alt="" />
                    <h2>{address}</h2>
                    <img src={heart} alt="" />
                </div>
                <div className="contact-item">  
                    <img src={Adress} alt="" />
                    <h2>{name}</h2>
                </div>
                <div className="contact-item">
                    <button>Подробнее</button>
                </div>
            </div>
            
        </div>
  )
}

export default RestarauntCard