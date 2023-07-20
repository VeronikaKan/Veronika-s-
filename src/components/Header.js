import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = ({value,setValue,setCurrency}) => {

    const handleKeyDown = (e) => {
if( e.target.value !== "" && e.key === 'Enter') {
    setCurrency (value)
}
    }
    const handleText = (e) => {
        setValue(e.target.value)
    } 
  return (
    <>
    <div className='header'>
<div className='container'>
    <div className='header__wrapper'>
<NavLink to='/' className='header__logo'>
    $
</NavLink>
<input type='text' className='header__input' onInput={handleText} onKeyDown={handleKeyDown} placeholder='Поиск'/>
    </div>

</div>
    </div>
    </>
  )
}

export default Header