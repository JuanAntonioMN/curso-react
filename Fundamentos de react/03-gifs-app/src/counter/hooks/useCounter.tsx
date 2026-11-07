import { useState } from "react"



export const useCounter = (inicialValue:number=10) =>{
    const [MyCounterApp,setMyCounterApp] = useState(inicialValue)

    const handleAdd = ( ) =>{
        setMyCounterApp((prevState)=>prevState+1);
    };
    
    const hadleSubtract = ()=>{
        setMyCounterApp((prevState)=>prevState-1)
    }

    const hadleReset = ()=>{
        setMyCounterApp(inicialValue)
    }

    return {
        MyCounterApp,
        handleAdd,
        hadleSubtract,
        hadleReset
    }
}