import React, { useState } from 'react'

function Slider({slides}) {
    const [currentslide, setCurrentslide]= useState(0)

    const previousImage =() =>{
       
        const isFirstslide = currentslide === 0
        const newIndex = isFirstslide ? slides.length -1: currentslide -1
        setCurrentslide(newIndex)
    };

    const nextImage =() =>{
        const isLastlide = currentslide === slides.length -1
        const newIndex = isLastlide? 0 : currentslide +1
        setCurrentslide(newIndex)
    }
            
  return (
    <div className='slide-container'>
        <div style={{with:"100%", height: "100%", overflow:"hidden", display:"flex"}}>
            {slides.map(url =>(
                <img key={url} src={url} alt=""  className='image-slider-image'
                style={{translate: `${ -100 * currentslide}%` }}
                />
            ))}
            
        </div>
        <button className='left-arrow-btn' onClick={previousImage}>&lt;</button>
            <button className='right-arrow-btn' onClick={nextImage}>&gt;</button>

         <div className='dot-container dotted'>
           {slides.map((url, index) =>(
                 <div key={url} className='dots' onClick={()=>setCurrentslide(index)}>
                    .
                 </div>
            
           ))}

   </div>
           
        
    </div>
  )
}

export default Slider