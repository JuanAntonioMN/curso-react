function saludo(nombre:string):string{
    return `Hola ${nombre}`
}

const saludos= (nombre: string):string => `Hola ${nombre}`;


interface User{
    uid:string;
    username:string
  
}

const mensaje:string=saludo("Antonio")
const mensaje2:string=saludos("Juan")

console.log({mensaje,mensaje2})



function getUsuario( ):User{
    return {
        uid:"fdfd",
        username:"antonio_343"
    }
}


const getUsuario2=( ):User => ({ uid:"fsf43",username:"juanito_antonio_343"});

const getuser=( ):User=>{ return {uid:"eeter",username:"juan_343"}}

const user=getUsuario( )
const user2=getuser( )
const user3=getUsuario2( )

console.log({user,user2,user3})

const myNumbers:number[]=[1,2,23,3,43,4]

myNumbers.forEach(function(valor){
    console.log({valor})
});

myNumbers.forEach((valor)=>{
    console.log({valor})
});

myNumbers.forEach(console.log);


