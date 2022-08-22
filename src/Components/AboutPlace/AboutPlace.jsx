import React, {useEffect, useState} from 'react'
import Rectangle from '../../Images/Rectangle.png'



export const Aboutplace = (props) => {
//  const [posts, setPosts]=useState([])
//  const fetchData=()=>{
//   fetch("https://still-forest-37543.herokuapp.com/1/")
//   .then(response=>{
//     return response.json()
//   })
//   .then(data=> {
//     setPosts(data)
//   })
//  }
//  useEffect(()=>{
//   fetchData()
//  }, [])

  return (
    <div className="AboutPlace-container">
        <div className="AboutPlace">
              <h2>О ЗАВЕДЕНИИ</h2>
              <div>{props.description}</div>
            </div>
            <div className="rectangleImage">
            <img  src={Rectangle} alt=""/>
            </div>
    </div>
  )
}
export default Aboutplace
