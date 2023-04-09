import React, { useState } from 'react'

const Tour = ({id,image,info,name,price, remove}) => {
    // setting readmore on info

    const [readMore, setReadmore] = useState(false)
  return (
    <article className="single-tour">
        <img src={image} alt={name} className="img"/>
        <span className="tour-price">${price}</span>
   <div className="tour-info">
    <h5>{name}</h5>
    <p>{readMore ? info : `${info.substring(0,200)}...`}</p>
    <button onClick={()=>setReadmore(!readMore)  } type='button' className="info-btn" >{readMore ? `show less` : `read more` }</button>
    {/* removing uninterested item */}
    <button className="btn btn-block delete-btn" onClick={(()=> remove(id))} >not interested</button>
   </div>
    </article>
  )
}

export default Tour