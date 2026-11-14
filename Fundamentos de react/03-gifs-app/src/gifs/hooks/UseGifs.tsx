import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gifs.interface";
import { getGifByQuery } from "../actions/get-gifs-by-query.action";


export const useGifs = ( )=>{
    const [previousTerms,setPreviousTerms] = useState<string[]>([])
    const [gifs,setGifs] = useState<Gif[]>([])
    const gifsCache = useRef<Record<string,Gif[]>>({});

    const handleTermClicked = async (term:string)=>{
        if(gifsCache.current[term]){
            setGifs(gifsCache.current[term]);
            return;
        }
        
        const gifs = await getGifByQuery(term);
        setGifs(gifs);
    };

    const handleSearch =async  (query:string)=>{
            
            if(typeof query === 'string' && query.trim().length > 0){
                const newQuery=query.trim()
                if(!previousTerms.includes(newQuery)){
                    setPreviousTerms(previousTerms=>[newQuery,...previousTerms.slice(0,6)])
                }
    
               const gifs=await getGifByQuery(query)
               setGifs(gifs) 
               gifsCache.current[query]=gifs;
            }
        }


    return {
        gifs,
        previousTerms,
        handleTermClicked,
        handleSearch,
    }
}