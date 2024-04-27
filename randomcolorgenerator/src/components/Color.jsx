import React, { useState } from 'react'

const Color = () => {
    const [color, setColor]= useState('#000000')

    const colorgenrator=()=>{
    const hex= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexcolor= '#'
    for (let i = 0; i<6; i++) {
        
        hexcolor +=hex[Math.floor(Math.random()*(hex.length))]
        setColor(hexcolor)
        
    }
    console.log(hexcolor)
}


  return (
    <div style={{
      justifyContent:'center',
      alignItems:"center",
      marginTop:"5rem",
      textAlign:'center'
    }}>
        <button onClick={colorgenrator}
        style={{
          padding:'10px',
          backgroundColor:'grey',
          border:'none',
          borderRadius:'5px',
          cursor:'pointer'
        }}
        >generate random color</button>
        <div style={{
          width:'100vw',
          height:'50vh',
          background:color,
          marginTop:'10px',
          display:'flex',
          justifyContent:"center",
          alignItems:'center'
        }}>
          <h1>{color}</h1>

        </div>
    </div>
  )
}

export default Color