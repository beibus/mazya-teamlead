import React,{useEffect, useState} from 'react'
import SelectionCard from './SelectionCard'
import axios from 'axios'
import './Selections.css'

function Selections() {
    const [data, setPosts] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState(null)
    const [places, setPlaces] = useState([])

//     async function fetchData() {
//     fetch("https://still-forest-37543.herokuapp.com/selection/")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setPosts(data)
//       })
//   }

const fetchData = async () =>  {
    setLoading(true)
    const url = "https://still-forest-37543.herokuapp.com/selection"

    try {
      const response = await axios.get(url);

      if (response.data.errors) {
        setError(response.data.errors)
        setLoading(false)
        return
      } 

      setPlaces(response.data.results)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
}

//   const places=data.results

console.log(places)
  useEffect(() => {
    fetchData()
  }, [])
  
// console.log(data.results)
// if (!places)
// return 'Loading...'
// if (error) return (
//     <div>{error.requests || error.rateLimit}</div>
//   )

  if (!places) return 'Loading...'
  return (
    <div className="selections-grid-container">
        {       
                places.map(item=>(
                // <SelectionCard
                // image={item.image}
                // title={item.name}
                // count={item.restaurants_count}
                // key={item.id}
                // />

                <div key={item.id} className="grid-item">
                    <div className="place-image">
                        <img src={item.image}/>
                    </div>
                    <div className="place-title">
                        <h3>{item.name}</h3>
                    </div>
                     <div className="place-count">
                        <span>{item.restaurants_count}</span>
                    </div>
                </div>
            ))
        }   
    </div>
  )
}

export default Selections