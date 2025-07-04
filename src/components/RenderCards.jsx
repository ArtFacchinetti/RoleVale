import { useState, useEffect, useRef } from "react"
import Card from './Card.jsx';


const RenderCards = ({ filtered, data }) => {
    const firstRender = useRef(true);

    console.log(firstRender.current)
    // Decide qual lista usar
    const lista = firstRender.current ? data : filtered;

    // Marca que a primeira renderização já passou
    firstRender.current = false;
    console.log({data: data, lista: lista})
    return (

        <>{
            lista.map(item => (
                <Card key={item.id} data={item} />))
        }</>

    )
}


export default RenderCards