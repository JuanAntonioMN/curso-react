import type {FC} from 'react';

interface Props{
    searches: string[];
    onLabelClicked:(term:string)=>void;
}

export const PreviousSearches: FC<Props> = ({searches,onLabelClicked})=>{
    return (
        <div>
            <h2>Búsquedas previas</h2>
            <ul>
               {
                searches.map((item)=>(
                    <li key={item} onClick={()=>onLabelClicked(item)}>
                       {item}
                    </li>
                ))
               }
            </ul>
        </div>
    )
}