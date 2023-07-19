import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = ({text,setText,info}) => {
    const[valute,setValute] = useState('')
    const handleKey = (e) => {
if(e.key === 'Enter'){
    setText (valute)
}
    }
    const handleText = (e) => {
        setValute(e.target.value)
    } 
  return (
    <>
    <div className='header'>
<div className='container'>
    <div className='header__wrapper'>
<NavLink to='/' className='header__logo'>
    $
</NavLink>
<input type='text' className='header__input' onInput={handleText} onKeyDown={handleKey} placeholder='Поиск'/>
    </div>

</div>
    </div>
    </>
  )
}

export default Header