import {beforeEach, describe,expect,test} from 'vitest'
import {act, render, renderHook} from '@testing-library/react'
import { useCounter } from './useCounter'

describe('UseCounter',()=>{
    let result;

    beforeEach(()=>{
        const {result:hookValue} = renderHook(()=>useCounter());
        result=hookValue;
    });

    test('should initialize with default value of 10',()=>{
        const { result } = renderHook(()=>useCounter())

        expect(result.current.MyCounterApp).toBe(10);
    })

    test('should initialize with value 20 ',()=>{
        const value=20;
        const { result } = renderHook(()=>useCounter(value))

        expect(result.current.MyCounterApp).toBe(value);
    })


    test('should increment counter when handleAdd is called ',()=>{
        
      
        const { result } = renderHook(()=>useCounter())

        act( ( )=>{
            result.current.handleAdd( )
           
        });




        expect(result.current.MyCounterApp).toBe(11)
    })


    test('should decrement counter when hadleSubtract is called ',()=>{
        
      
        const { result } = renderHook(()=>useCounter())

        act( ( )=>{
            result.current.hadleSubtract( )
           
        });

    

        expect(result.current.MyCounterApp).toBe(9);
    })

    test('should initialize counter when hadleReset is called ',()=>{
        
        const value=12;
       
        const { result } = renderHook(()=>useCounter(value))

        act(() => {
            result.current.hadleReset( )           
        });

        expect(result.current.MyCounterApp).toBe(value);
    })
    
})