
import './Navigation.css'
import heart from '../../Images/heart.png'
import user from '../../Images/user.png'
import React, { useState, useEffect } from 'react'
import RestarauntCard from '../../components/RestarauntCard/RestarauntCard'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'



const Navigation = () => {
  const [places, setPlaces] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const navigate=useNavigate()



  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    setLoading(true)
    const url = "https://restaurantkg.herokuapp.com/category/"

    try {
      const response = await axios.get(url);

      if (response.data.errors) {
        setError(response.data.errors)
        setLoading(false)
        return
      }

      setPlaces(response.data.results)
      // setCatItem(response.data.results[0].restaurants)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }

  }
  console.log('places', places)
  // console.log('CatITEM',catItem)
  if (!places) return 'Loading...'



  console.log(places)
  const handleOptionClick=(e)=>{
    const id=e.target.value
    navigate(`/category/${id}`)
    console.log(id)
  }
  return (
    <div className='Navigation'>
      <div className='Navigation-options'>
        <a className='Option' href='/'>Home</a>


        <select onChange={handleOptionClick} className='Option' name="select" id="selectPlace">
          <option value="" selected disabled hidden>Все заведения</option>
          {places.map(place => (

            <option  value={place.id}>
              {/* <Link key={place.id}
              to={`/category/${place.id}`}>
              </Link> */}
              {place.name}
            </option>

          ))}

        </select>










        <a className='Option' href="#/promo">Акции</a>
        <a className='Option' href="#/selection">Подборки</a>
      </div>
      <div className='Navigation-icons'>
        <div className='Option-right'><img src={heart} alt="" /></div>
        <div className='Option-right'><img src={user} alt="" /></div>
      </div>
    </div>
  )
}

export default Navigation