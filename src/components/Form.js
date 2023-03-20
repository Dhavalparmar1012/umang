import React, { useEffect, useRef, useState } from 'react'

export default function Form() {
    const refElement = useRef("");

    useEffect( () =>{
        console.log("Component mounted");
    },[])
    
    const [name,setName] = useState("Dhaval");

    console.log(refElement);

    function Reset(){
        setName("");
        refElement.current.focus();
    }

    const handleUp = () =>{
        refElement.current.style.color="blue";
    }

  return (
    <>
    <div className='container my-3'>
      <h1>Learning UseRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button className='btn btn-outline-primary mx-2' onClick={Reset} >Reset</button>
      <button className='btn btn-outline-danger mx-2' onClick={handleUp}>Color Blue</button>
    </div>
    </>
  )
}
