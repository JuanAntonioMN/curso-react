// La interfaz es un molde
interface Persona {
    nombre:string;
    apellido:string;
    edad:number;
    direccion?:Direccion
   
}


interface Direccion{  
    ciudad:String
}


const ironman:Persona={
    nombre:"Tony",
    apellido:"Stark",
    edad:45,
    direccion:{
        ciudad:"New York"
    }
}

const spiderman:Persona={
    nombre:"Tony",
    apellido:"Stark",
    edad:45,
}

console.log(ironman,spiderman)

// const spiderman=structuredClone(ironman);

// spiderman.nombre="Peter"
// spiderman.nombre="Parker"
// spiderman.edad=22
// spiderman.direccion.ciudad="Puebla"

// console.log(ironman,spiderman)