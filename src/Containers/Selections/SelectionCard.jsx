import React from 'react'

function SelectionCard(image, title, count,key) {
  return (
    <div key={key}>
        <div className="place-image">
            <img src={image}/>
        </div>
        <div className="place-title">
            <h2>{title}</h2>
        </div>
        <div className="place-count">
            <span>{count}</span>
        </div>
    </div>
  )
}

export default SelectionCard