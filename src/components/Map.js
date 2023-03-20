import React, { useRef } from 'react'

export default function Map() {
    const IPL =['UK','USA','CANADA','UK'];
    const result = IPL.map((fl,index) => <h2 key={index}>{fl}</h2>)

    const refObject = useRef();
    console.log(refObject)

    function handlesubmit(e){
        e.preventDefault()
        console.log((refObject.current.value).toUpperCase())
    }
  return (
    <>

    <div className='container mb-3'>
        <form onSubmit={handlesubmit}>
        <label>First Name :</label><br />
        <input type='text' ref={refObject} /><br/>
        <button className='btn btn-outline-primary my-2'>Click</button>
        </form>
    </div>

    <div className='container mb-3'>
        <h1>Map function</h1>
        <h2>{result}</h2>
    </div>

    {/* old method */}
    {/* <div className='map'>
        {IPL[0]}<br/>
        {IPL[1]}<br/>
        {IPL[2]}
    </div> */}
    </>
  )
}
