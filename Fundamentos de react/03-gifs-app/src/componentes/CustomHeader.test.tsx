import {describe,expect,test} from 'vitest'
import {render,screen} from '@testing-library/react'
import { CustomHeader } from './CustomHeader'

describe('GifsApp',()=>{
   const name="Hola"
   const description="description"

    test('should render the title correctly',()=>{
       
        render(<CustomHeader title={name}/>)
        screen.debug();
        expect(screen.getByText(name)).toBeDefined();

    });

    test('should render the description when provided',()=>{

        render(<CustomHeader title={name} description={description}/>)
        screen.debug();
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getAllByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    
    });

    test('should not render  description when not provided',()=>{
        const {container}=render(<CustomHeader title={name}/>)
        const divElement = container.querySelector('.content-center');

        const h1=divElement?.querySelector('h1');

        expect(h1?.innerHTML).toBe(name);

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
    })





})