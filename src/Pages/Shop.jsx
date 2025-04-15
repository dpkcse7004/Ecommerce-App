import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular.jsx'
import Offers from '../components/Offers/Offers'
import NewCollections from "../components/NewCollections/NewCollections"
import Newsletter from '../components/NewsLetter/NewsLetter.jsx'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
      
    </div>
  )
}

export default Shop