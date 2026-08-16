import type { GiphyRandomResponse } from "./data/gifhy.response";
const API_KEY="RhqA7yte7tpmuh0iF2aHAtSIbIwThDWL"

const createImg=( url:string )=>{
    const imageElement=document.createElement("img");
    imageElement.src=url
    document.body.append(imageElement)
}

const myRequest=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest.then((response)=>response.json( ))
.then(({ data }:GiphyRandomResponse)=>{

    const imageurl=data.images.original.url;
    createImg(imageurl)
    
})
.catch( (err)=>{
    console.error(err)
});



