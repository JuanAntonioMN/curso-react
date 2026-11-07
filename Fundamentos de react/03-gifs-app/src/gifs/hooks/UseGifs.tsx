import { useState } from "react";
import type { Gif } from "../interfaces/gifs.interface";
import { getGifByQuery } from "../actions/get-gifs-by-query.action";


export const useGifs = ( )=>{
    const [previousTerms,setPreviousTerms] = useState([])
    const [gifs,setGifs] = useState<Gif[]>([])
    
    const handleTermClicked = (term:string)=>{
        console.log({term})
    };

    const handleSearch =async  (query:string)=>{
            
            if(typeof query === 'string' && query.trim().length > 0){
                const newQuery=query.trim()
                if(!previousTerms.includes(newQuery)){
                    setPreviousTerms(previousTerms=>[newQuery,...previousTerms.slice(0,6)])
                }
    
               const gifs=await getGifByQuery(query)
               setGifs(gifs)
            }
        }


    return {
        gifs,
        previousTerms,
        handleTermClicked,
        handleSearch,
    }
}