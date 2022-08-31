import React from "react";
import "./Promo.css";
import NewsImages from "../../Images/img1.png";
import NewsImages2 from "../../Images/img2.png";
import NewsImages3 from "../../Images/img3.png";
export default function Promo() {
  return (
      <div className="allPromoNews">
        <div className="promoBlock">
          <div className="promoAndNews">
            <h2 className="promoH2">
              Акции и новости <br /> в заведениях Бишкека
            </h2>
            <p className="promoMonth">июнь-июль 2022</p>
          </div>
          <div className="newAndDate">
            <p className="newDate">24 июня 2022 в 13.00</p>
            <a href="#" className="newSierra">
              Sierra coffee
            </a>
            <p className="newSpeciality">НОВИНКА</p>
          </div>
          <div className="UnderText">
            <div className="newsImages">
              <img className="newsImage1" src={NewsImages} />
              <img className="newsImage2" src={NewsImages2} />
              <img className="newsImage3" src={NewsImages3} />
            </div>
            <p className="newsText">
              А ещё предприниматели в сети интернет освещают чрезвычайно
              интересные особенности картины в целом, однако конкретные выводы,
              разумеется, превращены в посмешище, хотя само их существование
              приносит несомненную пользу обществу. Не следует, однако,
              забывать, что глубокий уровень погружения играет важную роль в
              формировании экспериментов, поражающих по своей масштабности и
              грандиозности. Может быть так не должно было{" "}
            </p>
            <div className="newsButton">
              <button className="newsBtn">Показать полностью</button>
            </div>
          </div>
        </div>

        <div className="promoBlock">
          <div className="newAndDate">
            <p className="newDate">24 июня 2022 в 13.00</p>
            <a href="#" className="newSierra">
              Sierra coffee
            </a>

            <p className="newSpeciality">НОВИНКА</p>
          </div>
          <div className="UnderText">
            <div className="newsImages">
              <img className="newsImage1" src={NewsImages} />
              <img className="newsImage2" src={NewsImages2} />
              <img className="newsImage3" src={NewsImages3} />
            </div>
            <p className="newsText">
              А ещё предприниматели в сети интернет освещают чрезвычайно
              интересные особенности картины в целом, однако конкретные выводы,
              разумеется, превращены в посмешище, хотя само их существование
              приносит несомненную пользу обществу. Не следует, однако,
              забывать, что глубокий уровень погружения играет важную роль в
              формировании экспериментов, поражающих по своей масштабности и
              грандиозности. Может быть так не должно было{" "}
            </p>
            <div className="newsButton">
              <button className="newsBtn">Показать полностью</button>
            </div>
          </div>
        </div>
        <div className="promoBlock">
          <div className="newAndDate">
            <p className="newDate">24 июня 2022 в 13.00</p>
            <a href="#" className="newSierra">
              Sierra coffee
            </a>

            <p className="newSpeciality">НОВИНКА</p>
          </div>
          <div className="UnderText">
            <div className="newsImages">
              <img className="newsImage1" src={NewsImages} />
              <img className="newsImage2" src={NewsImages2} />
              <img className="newsImage3" src={NewsImages3} />
            </div>
            <p className="newsText">
              А ещё предприниматели в сети интернет освещают чрезвычайно
              интересные особенности картины в целом, однако конкретные выводы,
              разумеется, превращены в посмешище, хотя само их существование
              приносит несомненную пользу обществу. Не следует, однако,
              забывать, что глубокий уровень погружения играет важную роль в
              формировании экспериментов, поражающих по своей масштабности и
              грандиозности. Может быть так не должно было{" "}
            </p>
            <div className="newsButton">
              <button className="newsBtn">Показать полностью</button>
            </div>
          </div>
        </div>
        <div className="promoBlock">
          <div className="newAndDate">
            <p className="newDate">24 июня 2022 в 13.00</p>
            <a href="#" className="newSierra">
              Sierra coffee
            </a>

            <p className="newSpeciality">НОВИНКА</p>
          </div>
          <div className="UnderText">
            <div className="newsImages">
              <img className="newsImage1" src={NewsImages} />
              <img className="newsImage2" src={NewsImages2} />
              <img className="newsImage3" src={NewsImages3} />
            </div>
            <p className="newsText">
              А ещё предприниматели в сети интернет освещают чрезвычайно
              интересные особенности картины в целом, однако конкретные выводы,
              разумеется, превращены в посмешище, хотя само их существование
              приносит несомненную пользу обществу. Не следует, однако,
              забывать, что глубокий уровень погружения играет важную роль в
              формировании экспериментов, поражающих по своей масштабности и
              грандиозности. Может быть так не должно было{" "}
            </p>
            <div className="newsButton">
              <button className="newsBtn">Показать полностью</button>
            </div>
          </div>
        </div>
        <div className="newsFooter">
          <a className="newsAbout" href="#">
            О нас
          </a>
          <a className="newsContact" href="#">
            Контакты
          </a>
          <a className="newsDelivery" href="#">
            Доставка и оплата
          </a>
        </div>
      </div>
  );
}
