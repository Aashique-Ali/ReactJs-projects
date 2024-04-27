import React, { useState } from 'react'
import data from './data'

const Accordian = () => {
   const [selected, setSelected]= useState(null)

  const handleSelected =(cuurentId) =>{

    setSelected(cuurentId === selected? null:cuurentId)
  }

  return (
    <div>
      <div>
        {
         data.map((items) =>(
          data && data.length > 0 ? 
          <div onClick={() =>handleSelected(items.id)}>
            {items.question}
            {
          selected=== items.id? <div>{items.answer}</div>:null
        }
          </div>:
           <div>
            No data found
           </div>
         ))
        }
        
      </div>

    </div>
  )
}

export default Accordian