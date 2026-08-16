import type { GiphyRandomResponse } from "./data/gifhy.response";
const API_KEY="RhqA7yte7tpmuh0iF2aHAtSIbIwThDWL"

const createGifDOM=( url:string )=>{
    const imageElement=document.createElement("img");
    imageElement.src=url
    document.body.append(imageElement)
}



const getRandomGifURL=async( ):Promise<string>=>{

    const response=await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data }:GiphyRandomResponse=await response.json( );
    return data.images.original.url;
}


getRandomGifURL( ).then((url) => createGifDOM(url)).catch((error)=>console.log(error))


