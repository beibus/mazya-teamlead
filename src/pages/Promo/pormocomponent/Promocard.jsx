import React from "react";

function Promocard({ time, date, image, description, rest_name }) {
  return (
    <>
      <div className="promoAndNews">
        <h2 className="promoMonth">{date}</h2>
      </div>
      <div className="promoPage">
        <h2 className="newDate">{time}</h2>
        <p className="restName">{rest_name}</p>

        <img className="newsImage" src={image} alt="photo1" />
        <img className="newsImage" src={image} alt="photo2" />
        <img className="newsImage" src={image} alt="photo3" />
        <div className="newSpeciality">
          <p className="newsText">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Promocard;
