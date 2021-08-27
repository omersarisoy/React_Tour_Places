import React from 'react';
import {useState} from "react";
import "./App.css"
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Card from './components/cards/card';

 function App() {
   const [IsVisible, setIsvisible] = useState(false);

   const onMouseClick = () => {
     setIsvisible(!IsVisible)
   };
   
  return (
    <div>
      <Navbar />
      <Header /> 
      <Card IsVisible={IsVisible} onClick={onMouseClick} />

    </div>
  )
}

export default App