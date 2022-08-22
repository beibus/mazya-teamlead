import React from 'react'
import TopContainer from '../../components/TopContainer/TopContainer'
import MidContainer from '../../components/MidContainer/MidContainer'
import { Selections } from '../../containers/Selections/Selections'

export const Home = () => {
  return (
    <div>
      <TopContainer/>
      <MidContainer/>
      <Selections/>
    </div>
  )
}

export default Home;  

