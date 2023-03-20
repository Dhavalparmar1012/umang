import React, { useEffect, useState } from 'react'
import useCounter from './useCounter';
// data export karaviyu hoy aene import karvanu
// import {data} from '../App';

export default function Textbook(props) {
    const [text,setText] = useState("");

    const handleUpcase = () => {
        let text1 = text.toUpperCase();
        setText(text1);
    }

    const handleLwcase = () => {
        let text1 = text.toLowerCase();
        setText(text1);
    }

    const handleClear = () => {
        setText(" ");
    }

    const handleRmv = () => {
        let mess = text.split(/[ ]+/);
        setText(mess.join(" "));
    }
    
    const upChanage = (event) =>{
        setText(event.target.value);
    }

    const [count,incretimes,decretimes] = useCounter(10);
    useEffect( ()=> {
        console.log("component mounted")
    },[])
  return (
    <>
    <div className='mb-6 mt-3'>
    <h2>Enter the text to analyze below</h2>
    <div className='mb-3'>  
      <textarea className="form-control" value={text} onChange={upChanage} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-outline-primary mx-2' onClick={handleUpcase}>Convert to UpperCase</button>
    <button className='btn btn-outline-success mx-2' onClick={handleLwcase}>Convert to LowerCase</button>
    <button className='btn btn-outline-info mx-2' onClick={handleClear}>Clear</button>
    <button className='btn btn-outline-danger mx-2' onClick={handleRmv}>Convert to Remove extra space</button>
    </div>

    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>words {text.split(" ").length} and {text.length} characters</p>
    </div>

    <div className='container my-3'>
        <h1>Button click {count} times</h1>
        <button className='btn btn-outline-danger mx-2' onClick={incretimes}>Increase</button>
        <button className='btn btn-outline-info mx-2' onClick={decretimes}>Decrease</button>
    </div>

    {/* create context api ne consume karvama aave che */}
    {/* <data.Consumer>
        {
            (name) => {
                return (
                    <h1>My Sister name is {name}</h1>
                )
            }
        }
    </data.Consumer> */}
    
    </>
  )
}
