// import logo from './logo.svg';
import './Details.css';
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

function Details() {
  return (

    <section className="upperContainer">
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
            <div className="placeInfo">
              <h2>О ЗАВЕДЕНИИ</h2>
              <p>“SIERRA”-это уютная кофейня с тихой атмосферой, ненавязчивой музыкой и приглушённым светом - все, что позволяет расслабиться.
              Это место для людей, которые ценят европейскую и мексиканскую кухню, высокий стандарт обслуживания.
              Для приготовления блюд мы используем исключительно свежие, натуральные продукты.
              Будем рады видеть вас у нас в гостях!</p>
            </div>
            <div className="Carousel">
            <h2>МЕНЮ</h2>
            <img src={Menu}/>
            </div>
            <div className="reviewsText">
              <div className="reviewsCount"><h2>ОТЗЫВЫ (43)</h2></div>
              <div className="reviewsLeave"><span>Как оставить отзыв?</span></div>
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
        <div className="mainImage">
          <div className="likeLogo">
          <img src={Like}/>
          </div>
          <div>
          <img src={SierraImage}/>
          </div>
          <div>
          <img className="rectangleImage"src={Rectangle} />
          </div>
        </div>
        
    </section>
  
  );
}

export default Details;
