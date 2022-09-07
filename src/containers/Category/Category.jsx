import React, { useState, useEffect } from 'react'
import RestarauntCard from '../../components/RestarauntCard/RestarauntCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Category.css'


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
        <div className='category-container'>
            <div >

                {/* {places.map(item=>{
                    <div>
                    <h2>{item.name}</h2>
                    <h2>{item.id}</h2>
                    <h2>{item.description}</h2>
                    </div>
                })} */}
                {places.map(place => (
                    <div  >
                        <div className='category-header'>
                            <h2>{place.name}</h2>
                            <Link
                        key={place.id}
                        to={`/category/${place.id}`}
                        >
                            <div><button>See all...</button></div>
                        </Link>
                        </div>
                        <div className='selection-exact-wrapper'>
                        {place.restaurants.map(item=>(
                                <Link
                                    key={item.id}
                                    to={`/details/${item.id}`}
                                >
                                    <RestarauntCard
                                        image={'https://nambafood.kg/image/125x125/146201.png'}
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

            
        </div>
    )
}

export default Category