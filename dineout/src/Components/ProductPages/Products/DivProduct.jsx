import React from 'react'

const DivProduct = ({e}) => {
  return (
    <div className='boxDesign-a'>
        <header>
            <img src={e.image} alt="" width={"100%"} height="170px"/>
        </header>
        <footer className='footerBox-a'>
    <h3>{e.name}</h3>
       <div>
        <span>{e.location1}</span>
        <span>{e.location2}</span>
        <span>{e.location3}</span>
       </div>

       <div>
        <span>{e.discription1} | </span>
        <span>{e.discription2} | </span>
        <span>{e.discription3} | </span>
        <span>{e.category} | </span>
       </div>
        </footer>

<div className='rating-a'>{e.rating}</div>


    </div>
  )
}

export default DivProduct