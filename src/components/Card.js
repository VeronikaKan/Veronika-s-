import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ info,currency,rates }) => {
    return (
        <div>
           <div className='container'>
           <p>
                Date:{
                    info.date
                }
            </p>
            <p>
               Base: {
                    info.base
                }
            </p>
            <p>
               {currency}:{
                    rates[currency] 
                }
            </p>
            <NavLink to= "/Details">
                Подробнее
            </NavLink>
  
           </div>
            
        </div>
    )
}

export default Card