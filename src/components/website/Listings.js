import React from 'react'
import { useParams } from 'react-router-dom'

const Listings = () => {
    const route = useParams();
    console.log(route);
    
  return (
    <div>
        <h1>Selected Taluka = {route.talukas}</h1>
        <h1>Selected Keyword = {route.keyword}</h1>
    </div>
  )
}

export default Listings