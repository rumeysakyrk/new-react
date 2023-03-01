import { useState } from "react";

function Counter(){
    const [count, setCount]=useState(0);

    const dec = ()=> {setCount(count-1)};
    const inc = () => {setCount(count+1) }
    return(
        <div>
            Counter
            <br />
            <h2>{count}</h2>
            <button onClick={dec}>
                Decrease
            </button>
            <button onClick={inc}>
                Increase
            </button>
        </div>
    )
}
export default Counter;