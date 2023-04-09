import React from 'react'
import Tour from './Tour'

const Tours = ({tours, remove}) => {
  return (
    <section>
        <div className="title" >
            <h2>Our tours</h2>
            <div className="title-underline">

            </div>
        </div>
        <div className="tours">
            {tours.map((tr)=>{
                console.log(tr);
                return <Tour key={tr.id} {...tr}  remove={remove} />
            })}
        </div>
    </section>
  )
}

export default Tours