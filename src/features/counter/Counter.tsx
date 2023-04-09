import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, reset, incrementByAmount} from "./counterSlice";
import { useState } from 'react';

import { RootState } from "./../../app/store";
import { stringify } from 'querystring';


export const Counter = () =>{

    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState<number>(0);
    const addValue = incrementAmount || 0;
    
 

    const resetAll = () => {
        dispatch(reset());
        setIncrementAmount(0);
    }
    return (
        <>
    <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div> 
    <div>
        <input 
        type="text"
        value={incrementAmount}
        onChange={(e)=>{
            if(isNaN(Number(e.target.value))){
            alert ("0dan az olmaz")
        }else{
            setIncrementAmount(Number(e.target.value));
        }
    }}
        />
        <div>
            <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add amount</button>
            <button onClick={resetAll}>Reset all</button>
        </div>
    </div>
</>
    )
}
