import React, { useEffect, useState } from 'react'
import SelectionCard from './SelectionCard'
import axios from 'axios'
import './Selections.css'
import {Link} from 'react-router-dom'


function Selections() {
    const [data, setPosts] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState(null)
    const [places, setPlaces] = useState([])

    //      function fetchData() {
    //     fetch("https://still-forest-37543.herokuapp.com/selection/")
    //       .then(response => {
    //         return response.json()
    //       })
    //       .then(data => {
    //         setPosts(data)
    //       })
    //   }

    const fetchData = async () => {
        setLoading(true)
        const url = "https://restaurantkg.herokuapp.com/selection"

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
    console.log(places.id)

    return (
        
        <div className="selections-grid-container">
            {places.map(item => {
                    return (
                        <Link
                        key={item.id}
                        to={`/selection/${item.id}`}
                        >
                            <SelectionCard
                                image={'https://nambafood.kg/image/468x318/54942.png'}
                                title={item.name}
                                count={item.id}
                                key={item.id}
                            />

                        </Link>
                    )
                })}
        
        </div>
    )
}

export default Selections