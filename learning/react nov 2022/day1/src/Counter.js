
import {useState} from 'react';
import { useRef } from 'react';
const Counter=()=>{
    
    const inputRef = useRef<HTMLInputElement>(null);

    const [count,setCount]=useState(0);

    const changeCount=()=>{
        setCount(count+1)
        // console.log('INPUT VALUE: ', inputRef.current?.value);
        console.log(count)
    }
    return(
        <div className="counter">
            <button onClick={changeCount}>Click me</button>
            <span id="text2">Total Number of times button is clicked: {count}</span>
        </div>
    )
}
export default Counter;