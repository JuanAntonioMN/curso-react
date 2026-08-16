import { describe, expect, test } from 'vitest'
import { add, subtract, multiply } from './math.helper'


describe("add", () => {

    test("Suma de dos numeros positivos", () => {

        // ! 1. Arrange preparación

        const a = 1;
        const b = 3;

        // ! 2. Act Estimulo
        const result = add(a, b)
        // ! 3. Assert Acercción
        console.log({ result });

        expect(result).toBe(a+b);

    });
});


describe("subtract", () => {

    test("Resta de dos numeros", () => {

        // ! 1. Arrange preparación

        const a = -1;
        const b = -3;

        // ! 2. Act Estimulo
        const result = subtract(a, b)
        // ! 3. Assert Acercción
        console.log({ result });

        expect(result).toBe(a-b);

    });
})


describe("multiply",()=>{

    test("Multiplicación de dos numeros",()=>{

           // ! 1. Arrange preparación

        const a = 20;
        const b = 4;

        // ! 2. Act Estimulo
        const result = multiply(a, b)
        // ! 3. Assert Acercción
        console.log({ result });

        expect(result).toBe(a*b);

        
    })

})