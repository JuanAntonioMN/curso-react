import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import {render,screen} from '@testing-library/react'

describe("MyAwesomeApp",()=>{

    // test("Should render firstName and lastName",()=>{
    //     const { container } = render (<MyAwesomeApp/>);
    //     screen.debug( );

        

    //     const h1 = container.querySelector("h1");
    //     const h3 = container.querySelector("h3");
       
    //     expect(h1?.innerHTML).toContain('Juan Antonio');
    //     expect(h3?.innerHTML).toContain('Maldonado Nepomuceno');



    // });


    test("Should render firstName and lastName -screen", () => {
        render(<MyAwesomeApp />);

        screen.debug();


        const h1 = screen.getByRole("heading",{
            level:1,
        });
         console.log(h1.innerHTML);


    });


    test('should match snapshot',()=>{

        const { container } = render(<MyAwesomeApp/>);

        expect(container).toMatchSnapshot();



    });


    test('should match snapshot',()=>{
        render(<MyAwesomeApp/>);
        expect(screen.getByTestId('div-app')).toMatchSnapshot( );
    });

});