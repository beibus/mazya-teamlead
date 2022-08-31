import React from 'react'
import Button from '../Button/Button'
import './Input.css'


const Input = () => {
  return (
    <div className='Input'>
        <input type="text" placeholder='Например: корейская кухня'></input>
        <Button />
      </div>
  )
}

export default Input