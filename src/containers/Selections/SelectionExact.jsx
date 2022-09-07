import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SierraImage from '../../Images/Sierrapic.png'
import './SelectionExact.css'

import RestarauntCard from '../../components/RestarauntCard/RestarauntCard'



function SelectionExact() {

    const [places, setPlaces] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        try {
            const url = `https://restaurantkg.herokuapp.com/?selection=${id}&category=`
            const response = await axios.get(url);
            console.log('url', url)
            if (response.data.errors) {
                setError(response.data.errors)
                setLoading(false)
                return
            }

            setPlaces(response.data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }
    console.log('places', places)
    console.log('places results', places.results)

    if (!places.results) return null

    return (
        <div className='selection-exact-wrapper'>
            {places.results.map(item => {
                return (
                    <Link
                        key={item.id}
                        to={`/details/${item.id}`}
                    >
                        <RestarauntCard
                            image={'https://nambafood.kg/image/125x125/146201.png'}
                            name={item.phone_numbers.join(', ')}
                            address={item.address}
                            key={item.id}
                        />

                    </Link>
                )
            })}

        </div>
    )
}

export default SelectionExact