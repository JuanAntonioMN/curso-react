

const persona={
    nombre:"Tony",
    edad:45,
    clave:"Iroman"
}


const {nombre,edad,clave }=persona;

// const name=persona.nombre
// const age=persona.edad
// const key=persona.clave

console.log({nombre,edad,clave})


interface Hero{
    name:string;
    age:number;
    key:string;
    rank?:string;
}


const userContext=({name,age,rank,key}:Hero)=>{
    return {
        id:key,
        user:{
            name:name,
            age:age
        },
        rank:rank
    }
}


const hero:Hero={
    name:"Petear",
    age:20,
    key:"49b2",
    rank:"200",
}

const {rank,id,user}=userContext(hero)
const {name}=user
console.log({rank,id,name})

