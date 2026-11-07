import { CustomHeader } from "./componentes/CustomHeader"
import { SearchBar } from "./componentes/SearchBar"
import { getGifByQuery } from "./gifs/actions/get-gifs-by-query.action"
import { GifList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import type { Gif } from "./gifs/interfaces/gifs.interface"
import { useState } from "react"

export const  GifsApp=()=>{

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

    return(
        <>
           
           <CustomHeader title="Buscador de gifs" description="Describre el gif perfecto"/>

           <SearchBar 
            placeholder="Buscar gifs" 
            onQuery={handleSearch}
           />

            <PreviousSearches 
                searches={previousTerms} 
                onLabelClicked={handleTermClicked}
            />

           <GifList gifs={gifs}/>
        
        </>
    )
}