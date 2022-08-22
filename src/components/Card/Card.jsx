import React from 'react'
import Button from '../Button/Button'

export const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.logo} alt="" />
      </div>
      <div>
        <h3>{props.id}</h3>
        <h3>{props.address}</h3>
      </div>
      <div>
        <Button title='Подробнее'/>
      </div>
    </div>
  )
}
