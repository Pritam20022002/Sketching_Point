import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreCollections from '../../components/ExploreCollections/ExploreCollections'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const[category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreCollections category={category} setCategory={setCategory}/>
        <ProductDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home