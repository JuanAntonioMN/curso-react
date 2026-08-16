import type { CSSProperties } from "react";

const nombre:string = "Juan Antonio";
const apellido:string = "Maldonado Nepomuceno";

const favoriteGames = ["Elden Ring", "Smash", "Metal Gear"];

const isActive = false;

const address = {
    ciudad: "Aguascalientes",
    pais: "Mexico"
};

export function MyAwesomeApp( ) {

    const myStyles:CSSProperties={
                backgroundColor:"red",
                fontSize:isActive ? "1.5rem": "1rem",
                padding:4,
                marginTop:29
            }

    return (
        <div data-testid="div-app">
            <h1>{nombre}</h1>
            <h3>{apellido}</h3>
            <p className="my-class-favorite">{favoriteGames.join(',')}</p>
            <p>suma: {2 + 1}</p>

            <p>{isActive ? 'Activo' : 'No activo'}</p>

            <p
            
            style={myStyles}
            
            >{JSON.stringify(address)}</p>
        </div>
    )
}
