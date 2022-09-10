import React from 'react'

function SelectionCard({image, title, count}) {
  return (
    <div>
        <div className="place-image">
            <img src={image} width="415px"/>
        </div>
        <div className="place-title">
            <h2>{title} </h2>
        </div>
        <div className="place-count">
            <span>{count} {' '}Мест </span>
        </div>
    </div>
  )
}

export default SelectionCard