
const characterNames:string[]=['Goku','Vegeta','Trunks']

const [,,Trunks]=characterNames

console.log({Trunks})


const returnsArraysFn=( )=>{
    return ["abs",4024] as const;
}

const [letras,numeros]=returnsArraysFn( )

console.log(100+numeros,letras)




//Ejercicio

const useState= (nombre:string) => {
    return [
        nombre,
        (valor:string)=>{
              console.log(valor)
        }
    ] as const;
}


const [nombre,setName]= useState("Goku")

console.log(nombre)

setName("Vegeta") 