import { useEffect, useState } from 'react'
import './css/Card.css'

const fontAwsomeTable = {
    user: 'fa-solid fa-user',
    pizza: 'fa-solid fa-pizza-slice',
    hamburguer: 'fa-solid fa-burger',
    lanche: 'fa-solid fa-burger',
    bebida: 'fa-solid fa-beer-mug-empty',
    musica: 'fa-solid fa-music',
    crianca: 'fa-solid fa-child',
    cafe: 'fa-solid fa-mug-hot',
    doce: 'fa-solid fa-cookie-bite',
    natureza: 'fa-solid fa-tree',
    sorvete: 'fa-solid fa-ice-cream',
    question: 'fa-solid fa-question',
    casal: 'fa-solid fa-heart'
}

const Card = ({ data }) => {
    const [id, setId] = useState(1);

    const [imgError, setImgError] = useState(false);

    useEffect(()=> {
        console.log('Error na imagem? ', imgError)
    })

    return (
        <article className="card">
            <div className="card-image">
                <img src={imgError ? './imagens/img-error.jpg' : data.imagem} onError={()=>{setImgError(true)}}></img>
            </div>
            <div className="card-content">
                <h3 className="card-title">{data.nome}</h3>
                <p className="card-description">
                    {data.tipo.join(', ')}
                </p>
                <div className="card-icons">
                    {data.tags.map((tag, index) =>
                        <div className="card-icon" key={index} title="teste">
                            <span className="icon-tootltip">{tag.toLocaleUpperCase()}</span>
                            <i className={fontAwsomeTable[tag] || fontAwsomeTable['question']} ></i>
                        </div>
                    )}
                </div>
                <div className="card-location">
                    {data.cidade.toLocaleUpperCase()} - {data.bairro.toLocaleUpperCase()}
                </div>
            </div>
        </article>
    )
}

export default Card