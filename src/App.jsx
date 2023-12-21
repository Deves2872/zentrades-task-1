/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json').then((response)=>{
    const temp=Object.values(response.data.products)  
    const sortedData = temp.sort((a, b) => b.popularity - a.popularity);
    setProducts(sortedData)
      //console.log(typeof response.data.products)
    }).catch((error)=>{
      console.log(error)
    })
  })
  return (
    <div id="home">
      <div id="title">
        <h1>Products</h1>
      </div>
      <div id="wrapper">
                {products.map((item,index)=>(
                <div className='card'>
                <h4>{index+1}. {item.title}</h4>
                <p>Subcategory: {item.subcategory}</p>
                <p>Price: {item.price}</p>
                <p>Popularity: {item.popularity}</p>
                </div>
                ))}
      </div>
    </div>
  )
}

export default App
