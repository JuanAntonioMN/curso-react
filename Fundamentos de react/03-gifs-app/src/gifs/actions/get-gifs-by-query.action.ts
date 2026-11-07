import axios from 'axios';
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gifs.interface';
import { giphyApi } from '../api/giphy.api';




export const getGifByQuery = async(query:String ): Promise<Gif[]> => {
    const response = await giphyApi<GiphyResponse>(
        '/search',{
        params:{
            q:query,
            limit:10,
        }
    })

   return response.data.data.map(gif=>({
    id:gif.id,
    title:gif.title,
    url:gif.images.original.url,
    width:Number(gif.images.original.width),
    height:Number(gif.images.original.height),
   }));
}