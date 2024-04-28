import { useState } from 'react'
import ImageSlider from './components/ImageSlider'
import football from './assets/football.jpeg'
import furniture from './assets/furniture.jpeg'
import laptops from './assets/laptops.jpeg'


function App() {
  const slides =[ 
    football, furniture, laptops
   ]

  return (
    <>
       <div style={{
      maxWidth:"70%",
      width:"100%",
      aspectRatio:"10 / 4",
      margin:" auto",
      marginTop:"4rem",
      marginBottom:"4rem"
    }} >
      <ImageSlider slides= {slides}/>
    </div>
    </>
  )
}

export default App
