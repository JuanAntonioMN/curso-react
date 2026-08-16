
const array:(number)[]=[2,3,4,4,44,4,4,4,4]


const arreglo=structuredClone(array)


array.push(2)
array.push(22)

arreglo.push(7)

console.log(array,arreglo)

for (const numero of array){
    console.log(`[${numero}]`)
}