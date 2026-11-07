import type { Gif } from "../../mock-data/gifs.mock";

interface Props{

    gifs:Gif[];
}

export const GifList=({gifs}:Props)=>{

    return (
         <div>
                {
                    gifs.map((gif)=>(
                        <div key={gif.id}>
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>
                                {gif.width}x{gif.height} (1.5mb)
                            </p>
                        </div>
                    ))
                }
            </div>
    )

}