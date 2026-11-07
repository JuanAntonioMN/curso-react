import { useState } from "react"

export const MyCounterApp = ( )=>{
    const [MyCounterApp,setMyCounterApp] = useState(5)

    const handleAdd = ( ) =>{
        setMyCounterApp((prevState)=>prevState+1);
    };
    
    const hadleSubtract = ()=>{
        setMyCounterApp((prevState)=>prevState-1)
    }

    const hadleReset = ()=>{
        setMyCounterApp(5)
    }


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