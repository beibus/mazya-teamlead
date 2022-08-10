import './App.css';
import sierra from '../src/images/Sierra.png'
import bublik from '../src/images/bublik.png'
import adriano from '../src/images/adriano.png'
import flask from '../src/images/flask.png'
import zerno from '../src/images/zerno.png'
import buxara from '../src/images/buxara.png'
import frunze from '../src/images/frunze.png'
import redcow from '../src/images/redcow.png'
import namebar from '../src/images/namebar.png'
import zelchel from '../src/images/zelchel.png'
import livebar from '../src/images/livebar.png'
import bar12 from '../src/images/bar12.png'
import apple from '../src/images/apple.png'
import telefon from '../src/images/telefon.png'
import vector from '../src/images/Vector.png'

import Button from './commonents/Button/Button'

const handleOk = () => {
  alert('Ok cliked')
}


function App() {
    return(
        <main>
            <div className="mainheader">
                <p>Подборки заведений </p>
            </div>
            <div className="mainbody">
                <span className="Coffe">Кофейни</span>
                <span className='glass'>Смотреть все</span>
            </div>
            <div className="grid-container">
                <div className="grid-block">
                    <div>
                        <img src={sierra} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996312311506"><img src={telefon} alt="" />+996(312)31-15-06</a>
                        <p><img src={vector} alt="" />пр. Манаса, 57 А, уг. ул. Киевская</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
                <div className="grid-block">
                    <div>
                        <img src={bublik} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996551155555"><img src={telefon} alt="" />+996(551)15-55-55</a>
                        <p><img src={vector} alt="" />ул. Тоголок Молдо, Бишкек</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
                <div className="grid-block">
                    <div>
                        <img src={adriano} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996555707083"><img src={telefon} alt="" />+996(555)70-70-83</a>
                        <p><img src={vector} alt="" />ул. Юнусалиева, 171/1</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>   
                </div>  
                <div className="grid-block">
                    <div>
                        <img src={flask} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996500407771"><img src={telefon} alt="" />+996(500) 407 771</a>
                        <p><img src={vector} alt="" />ул. Московская 37/1, Бишкек</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-block">
                    <div>
                        <img src={zerno} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996709317879"><img src={telefon} alt="" />+996(709) 317 879</a>
                        <p><img src={vector} alt="" />ул. Турусбекова, Бишкек</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
                <div className="grid-block">
                    <div>
                        <img src={buxara} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996555314444"><img src={telefon} alt="" />+996(555)31-44-44</a>
                        <p><img src={vector} alt="" />Асанбай,Токомбаева 21/А</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
                <div className="grid-block">
                    <div>
                        <img src={frunze} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996312664466"><img src={telefon} alt="" />+996(312) 664 466</a>
                        <p><img src={vector} alt="" />ул. Киевская 1, Бишкек</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
                <div className="grid-block">
                    <div>
                        <img src={redcow} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+99600624902"><img src={telefon} alt="" />+996(700) 624 902</a>
                        <p><img src={vector} alt="" />ул.Токтогула 95, Бишкек</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
            </div>
            <div className="mainbody">
                <div className="appleBlock">
                    <span className="bary">Бары</span>
                    <div className="apple">
                        <img src={apple} alt="" />
                    </div>
                </div>
                <span className='glass'>Смотреть все</span>
            </div>
            <div className="grid-container">
                <div className="grid-block">
                    <div>
                        <img src={namebar} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996559221091"><img src={telefon} alt="" />+996(559) 221 091</a>
                        <p><img src={vector} alt="" />92 ул. Боконбаева, Бишкек</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
                <div className="grid-block">
                    <div>
                        <img src={zelchel} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996776488446"><img src={telefon} alt="" />+996(776)488-446</a>
                        <p><img src={vector} alt="" />86 ул. Токтогула, Бишкек</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
                <div className="grid-block">
                    <div className="livebar">
                        <img src={livebar} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996557594999"><img src={telefon} alt="" />+996(557)59-49-99</a>
                        <p><img src={vector} alt="" />ул. Кулатова, 8/1, уг. ул. Горького</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
                <div className="grid-block">
                    <div>
                        <img src={bar12} alt="" />
                    </div>
                    <div className="linkText">
                        <a  href="tel:+996997121212"><img src={telefon} alt="" />+996(997) 121 212</a>
                        <p><img src={vector} alt="" />32 ул. Раззакова, Бишкек</p>
                        <Button onClick={handleOk}>Подробнее</Button>
                    </div>
                </div>
            </div>
            <div className="apple2">
                <img src={apple} alt="" />
            </div>
            <footer>
                <div className="footer-content">
                    <p>О нас</p>
                    <p>Контакты</p>
                    <p>Доставка и оплата</p>
                </div>
            </footer>
        </main>
    )
}
export default App;