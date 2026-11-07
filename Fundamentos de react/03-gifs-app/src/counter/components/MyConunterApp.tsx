import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = ( )=>{

    const {MyCounterApp,handleAdd,hadleSubtract,hadleReset}=useCounter(5);

    return (
       <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}
       
       >

        <h1>Counter: {MyCounterApp}</h1>

        <div style={{display:'flex',gap:'1rem'}}>
            <button onClick={handleAdd}>+1</button>
            <button onClick={hadleSubtract}>-1</button>
            <button onClick={hadleReset}>Reset</button>
        </div>

       </div>
    )
}