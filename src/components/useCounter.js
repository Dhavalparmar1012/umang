import {useState} from 'react'

export default function useCounter(initialValue = 0) {
    const [count,setCount] = useState(initialValue);

    const incretimes = () =>{
        setCount(count + 1);
    }    

    const decretimes = () =>{
        setCount(count - 1);
    }
  return [count,incretimes,decretimes]
}
