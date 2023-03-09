import { useState } from "react";
import useConsoleLog from "./customHooks";

function CustomHook2(){
    const [count, setCount] = useState(0);
    useConsoleLog(count);

    function increment(){
        setCount(prevCount => prevCount + 1)
    };

    function reset(){
        setCount(currentCount => currentCount * 0)
    }

    function decrement(){
    setCount(currentCount => currentCount - 1)
    }

   return(
    <div>
        <h1>
            Count: {count}
        </h1>
        <button onClick={increment}>Plus 1</button>
        <button onClick={decrement}>Minus 1</button>
        <button onClick={reset}>reset</button>
    </div>
   ); 
}


export default CustomHook2;