import React from 'react'

const Cards = (data) => {
  return (
    <div className='card'>
      <h3>{data.title}</h3>
      <p>{data.subcategory}</p>
      <p>{data.price}</p>
      <p>{data.popularity}</p>
    </div>
  )
}

export default Cards
