import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Main = ({ setInfo, info, currency, rates, setRates }) => {
   
    useEffect(() => {
        const getData = async () => {
            let { data } = await axios('https://www.cbr-xml-daily.ru/latest.js')
            setInfo(data);
            setRates(data.rates)
        }
        getData()
    }, [currency])

    return (
        <div>
            <Card info={info} currency={currency} rates={rates} />
        </div>
    )
}

export default Main