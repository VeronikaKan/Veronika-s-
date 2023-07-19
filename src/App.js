import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Details from "./pages/Details";
import Card from "./components/Card";
import { useState } from "react";

const App =()=> {
  const [info, setInfo] = useState({})
const [text,setText] = useState('USD')
  return (
   <Router>
    <Header text = {text} setText = {setText} info= {info}/>
    <Routes>
      <Route path="/" element = {<Main info = {info} setInfo= {setInfo}/>}/>
      <Route path="/details" element = {<Details/>}/>
    </Routes>
   </Router>
  );
}

export default App;
