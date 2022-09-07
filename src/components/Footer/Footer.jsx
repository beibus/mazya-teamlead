import './Footer.css';
import instaLogo from '../../Images/Instagram.png'
import facebookLogo from '../../Images/facebook.png'
import gmailLogo from '../../Images/Gmail Logo.png'


function Footer() {
  return (
    <div className="footer-container">

        <div className="footer-leftside">
          <p>О нас</p>
          <p>Все заведения</p>
          <p>Акции </p>
        </div>
        <div className="footer-middle">
          <p className="footer-textus">Напишите нам:</p>
          <div className="footer-middle-content" >
                <div className="footer-logo"><img src={facebookLogo}/></div>
                <div className="footer-logo-name"><a href="https://www.facebook.com/" target="_blank">Facebook</a></div>
          </div>
          <div className="footer-middle-content">
                <div className="footer-logo"><img src={gmailLogo}/></div>
                <div className="footer-logo-name"><a href="">Gmail</a></div>
          </div>
          <div className="footer-middle-content">
                <div className="footer-logo"><img src={instaLogo}/></div>
                <div className="footer-logo-name"><a href="https://www.instagram.com/" target="_blank">Instagram</a></div>
          </div>

        </div>
        <div className="footer-rightside">
          <p>Доставка</p>
          <p>Оплата</p>
        </div>
    </div>
  );
}

export default Footer;
