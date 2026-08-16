import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart{
    productName:string;
    quantity:number;
}

const itemsInCart:ItemInCart[]=[

    {productName:"Nintendo 2",quantity:2},
    {productName:"TV",quantity:1},
    {productName:"Mochila",quantity:4}

]


export function FirsStepsApp( ){
    return (
        <>
        <h1>Carrito de compras</h1>
        {/* <ItemCounter name="Nintendo Switch 2" quantity={1}/>
        <ItemCounter name="PC" quantity={2}/>
        <ItemCounter name="Monitor" quantity={6}/> */}

        {
            itemsInCart.map(({productName,quantity})=>(
                <ItemCounter key={productName} name={productName} quantity={quantity}/>
            ))
        }

        </>
      
    )
}