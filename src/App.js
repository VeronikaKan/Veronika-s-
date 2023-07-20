import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Details from "./pages/Details";
import { useState } from "react";

const App = () => {
  const [value,setValue] = useState('')
  const [currency,setCurrency] = useState("AUD")
  const [info, setInfo] = useState({})
  const [rates, setRates] = useState({})
  return (
    <Router>
      <Header value = {value} setValue = {setValue} setCurrency = {setCurrency}/>
      <Routes>
        <Route path="/" element={<Main  currency= {currency} info = {info} setInfo={setInfo} rates = {rates} setRates = {setRates}/>} />
        <Route path="/details" element={<Details  currency = {currency}  rates = {rates}/>} />
      </Routes>
    </Router>
  );
}

export default App;
