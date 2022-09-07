import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'
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
            const url = `https://still-forest-37543.herokuapp.com/?selection=${id}&category=`
            const response = await axios.get(url);
            console.log('url',url)
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
    console.log('places',places)
    const places2=[
        {
        id:1,
        image:{SierraImage},
        number:'+996435435435',
        adress:'TOKTOGULA'
    },
        {
        id:2,
        image:{SierraImage},
        number:'+996435435435',
        adress:'Nurbek'
    },
        {
        id:3,
        image:{SierraImage},
        number:'+996435435435',
        adress:'Beisheev'
    }
    ]
    if (!places) return null
    return (
        <div className='selection-exact-wrapper'>
            {places2.map(item => {
                    return (
                        <Link
                        key={item.id}
                        to={`/details/${item.id}`}
                        >
                            <RestarauntCard
                                image={'https://nambafood.kg/image/125x125/75651.png'}
                                number={item.number}
                                Adress={item.adress}
                                key={item.id}
                            />

                        </Link>
                    )
                })}
            
        </div>
    )
}

export default SelectionExact