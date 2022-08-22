import React from 'react'
import Call from '../../Images/Vector.png'
import Adress from '../../Images/AdressLogo.png'
import Hours from '../../Images/WorkingHours.png'
import Like from '../../Images/LikeLogo.png'
import SierraImage from '../../Images/Sierrapic.png'

export const Placename = () => {
  return (
    <div>
        <div className="mainInfo">
          <div className="headerInfo">
            <h2>Кофейня <br></br>Sierra Coffee</h2>
          </div>
          <div className="Details-box">
            <div className="Details-container">
              <div className="contactLogo"> <img src={Call} /></div>
              <div className="contactnumber"><span>+996(312)31-15-06</span></div>
            </div>
            <div className="Details-container">
              <div className="adressLogo"><img src={Adress}/></div>
              <div className="adressName">пр. Манаса, 57 А, ул. Киевская</div>
            </div>
            <div className="Details-container">
              <div className="contactLogo"><img src={Hours}/></div>
              <div className="contactnumber">Режим работы 08.00-00.00</div>
            </div>
          </div>
        </div>
        <div className="likeLogo">
          <img src={Like}/>
          </div>
          <div>
          <img src={SierraImage}/>
          </div>
    </div>
  )
}
export default Placename