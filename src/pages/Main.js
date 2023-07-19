import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Main = ({info,setInfo}) => {
   
useEffect(() => {
    
    const getData = async () => {
        let { data } = await axios('https://www.cbr-xml-daily.ru/latest.js')
        setInfo(data);

    }
    getData()
},[])
return (
    <div>
<Card info = {info}/>
    </div>
)
}

export default Main