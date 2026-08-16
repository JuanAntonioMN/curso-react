import {heroes, Owner, type Hero}  from './data/heroes.data'


const getHeroById=(id:number ):Hero | undefined=>{
   const hero=heroes.find( (hero)=>{
        return hero.id===id;
   });

//    if (!hero){
//     throw new Error(`No exite un jéroe con el id ${id}`)
//    }
   return hero;

}
console.log(getHeroById(1))


export const getHeroesByOwner=(owner:Owner):Hero[]=>{
    const res:Hero[]=heroes.filter((hero)=>{
        return (hero.owner===owner)
    });
    return res
}



