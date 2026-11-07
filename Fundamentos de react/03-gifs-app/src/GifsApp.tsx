import { CustomHeader } from "./componentes/CustomHeader"
import { SearchBar } from "./componentes/SearchBar"
import { GifList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { useGifs } from "./gifs/hooks/UseGifs"

export const  GifsApp=()=>{

    const {gifs,previousTerms,handleTermClicked,handleSearch}= useGifs()


    

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