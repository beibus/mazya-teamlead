import React, { useEffect, useState } from "react"
import Button from '../Button/Button'
import { Card } from '../Card/Card'


export const Selection = (props) => {
  const [category, setCategory] = useState([])

  const fetchData = () => {
    fetch("https://still-forest-37543.herokuapp.com/?category=2")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCategory(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <div>
        <h3>{props.category}</h3>
        <Button/>
      </div>
      <div>
        {category.map(item => (
            <Card
            logo = {item.logo}
            id = {item.id}
            address = {item.address}
            
            />
          ))
          }
          
      </div>
    </div>
  )
}
