import React from 'react'
import "./App.css"
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Card from './components/cards/card';

 function App() {
   
  return (
    <div>
      <Navbar />
      <Header /> 
      <Card />

    </div>
  )
}

export default App