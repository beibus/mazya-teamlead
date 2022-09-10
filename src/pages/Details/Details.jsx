// import logo from './logo.svg';
import './Details.css';

import React, { useEffect, useState } from 'react'
import SierraImage from '../../Images/Sierrapic.png'
import Call from '../../Images/Vector.png'
import Adress from '../../Images/AdressLogo.png'
import Hours from '../../Images/WorkingHours.png'
import Like from '../../Images/LikeLogo.png'
import Rectangle from '../../Images/Rectangle.png'
import Menu from '../../Images/Menu.png'
import Venera from '../../Images/Venera.png'
import Aisulu from '../../Images/Aisulu.png'
import Tom from '../../Images/Tom.png'
import Valeria from '../../Images/Valeria.png'
import Artur from '../../Images/Artur.png'
import Navigation from '../../components/Navigation/Navigation';
import { useParams } from 'react-router-dom'

function Details() {
  const { id } = useParams()
  const [place, setPosts] = useState([])
  const fetchData = (props) => {
    fetch(`https://restaurantkg.herokuapp.com/${id}/`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
  }
  useEffect(() => {
    fetchData()
    console.log(place)
  }, [])

  if (!place) return
  return (


    <section className="whole-container">
      <Navigation />
      <div className="upper-container">
        <div className="left-container">
          <div className="place-name">
            <h2>Кофейня <br></br>{place.name}</h2>
          </div>
          <div className="details-container">
            <div className="details-icon"><img src={Call} /></div>
            <div className="details-info"><span>{place.phoneNumbers?.map(item=>(<span>{item.phone_number}</span>))}</span></div>
            
          </div>
          <div className="details-container">
            <div className="details-icon"><img src={Adress} /></div>
            <div className="details-info"><span>{place.address}</span></div>
          </div>
          <div className="details-container">
            <div className="details-icon"><img src={Hours} /></div>
            <div className="details-info"><span>Режим работы: {place.openning_times}</span></div>
          </div>
        </div>
        <div className="right-container">
          <div><img src={SierraImage} /></div>
        </div>

      </div>

      <div className="lower-container">
        <div className="left-lower-container">
          <div className="about-place">
            <h2>О ЗАВЕДЕНИИ</h2>
          </div>
          <div className="place-description">
            <p>{place.description}</p>
          </div>
          <div className="place-menu">
            <h2>МЕНЮ</h2> 
          </div>
          <div className="place-menu-image">
            <img src={place.menu_image}/>
          </div>
          <div className="place-reviews">
            <div className="place-reviews-count"><h2>ОТЗЫВЫ:({place.review})</h2></div>
            <div className="place-reviews-leave"><span>Как оставить отзыв?</span></div>
          </div>
          <div className='reviewsDisplay'>
              <div className="reviewslist">
                <div><img src={Venera}/></div> 
                <div><h3>Венера</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
              <div className="reviewslist">
                <div><img src={Aisulu}/></div> 
                <div><h3>Айсулуу</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
             
              <div className="reviewslist">
                <div><img src={Tom}/></div> 
                <div><h3>Tom</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
              <div className="reviewslist">
                <div><img src={Valeria}/></div> 
                <div><h3>Валерия</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
              <div className="reviewslist">
                <div><img src={Artur}/></div> 
                <div><h3>Артур</h3></div> 
                <div><p>Превосходный кофе с мягким вкусом и комфортная зона для работы и времяпровождения</p></div> 
              </div>
            </div>
        </div>
        <div className="right-lower-container">
          <div>
          <img className="rectangleImage"src={Rectangle} />
          </div>
        </div>
      </div>
    </section>

  );
}

export default Details;