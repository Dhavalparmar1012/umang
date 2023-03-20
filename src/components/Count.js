import React from 'react'
import useCounter from './useCounter';

export default function Count() {
    const [count,incretimes,decretimes] = useCounter();
  return (
    <div>
      <div className='container my-3'>
        <h1>Button click {count} times</h1>
        <button className='btn btn-outline-danger mx-2' onClick={incretimes}>Increase</button>
        <button className='btn btn-outline-info mx-2' onClick={decretimes}>Decrease</button>
    </div>
    </div>
  )
}
