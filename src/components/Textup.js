import React, { useState } from 'react'

export default function Textup() {
    const [allvalue,setvalue] = useState({firstname: "Dhaval",lastname:"Parmar"});

    function update(){
        setvalue({...allvalue,firstname:"Pravinbhai"});
    }
  return (
    <div>
      <h1>My first name is {allvalue.firstname} and last name is {allvalue.lastname}</h1>
      <button className='btn btn-outline-primary' onClick={update}>Update</button>
    </div>
  )
}
