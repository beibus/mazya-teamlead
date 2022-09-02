import React, { useState, useEffect } from 'react'
import RestarauntCard from '../../components/RestarauntCard/RestarauntCard'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Category() {

    const [places, setPlaces] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    // const [catItem, setCatItem] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        setLoading(true)
        const url = "https://still-forest-37543.herokuapp.com/category/"

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
    console.log('places',places)
    // console.log('CatITEM',catItem)
    if (!places) return 'Loading...'
    return (
        <div>
            <div className='title'>

                {/* {places.map(item=>{
                    <div>
                    <h2>{item.name}</h2>
                    <h2>{item.id}</h2>
                    <h2>{item.description}</h2>
                    </div>
                })} */}
                {places.map(place => (
                    <div>
                        <div>
                            <h2>{place.name}</h2>
                        </div>
                        <div>
                        {place.restaurants.map(item=>(
                                <Link
                                    key={item.id}
                                    to={`/details/${item.id}`}
                                >
                                    <RestarauntCard
                                        image={item.logo}
                                        name={item.name}
                                        address={item.address}
                                        key={item.id}
                                    />

                                </Link>
                            
                            ))}
                            </div>
                    </div>

                ))}

            </div>

            <div><button>See all...</button></div>
        </div>
    )
}

export default Category