import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Promo.css";
import Promocard from "./pormocomponent/Promocard";
import Navigation from "../../components/Navigation/Navigation";

export default function Promo() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get("https://still-forest-37543.herokuapp.com/sale")
      .then((res) => {
        console.log(res);
        setSales(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("sales", sales);
  return (
    <div className="allPromoNews">
      <Navigation/>
      <div className="promoBlock">
        <div className="promoAndNews">
          <h1 className="promoH2">
            Акции и новости <br /> в заведениях Бишкека
          </h1>
          
        </div>
        {sales.map((sale) => (
          <Promocard
            date={sale.time_create}
            time={sale.time_update}
            rest_name={sale.rest_name}
            image={sale.sale_image}
            description={sale.text}
          />
        ))}
      </div>
    </div>
  );
}
