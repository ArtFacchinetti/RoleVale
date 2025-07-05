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
    milkshake: 'fa-solid fa-ice-cream',
    acaí: 'fa-solid fa-ice-cream',
    question: 'fa-solid fa-question',
    familia: 'fa-solid fa-people-group',
    restaurante : 'fa-solid fa-utensils',
    casal: 'fa-solid fa-heart'
}

const Card = ({ data }) => {
    const [id, setId] = useState(1);

    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        console.log('Error na imagem? ', imgError)
    })

    return (
        <article className="card">
            <div className="card-image">
                <h3>{data.nome}</h3>
            </div>
            <div className="card-content">
                <p className="card-description">
                    {data.tipo.join(', ')}
                </p>
                <div className="card-icons">
                    {data.tags.map((tag, index) =>
                        <div className="card-icon" key={index}>
                            <span className="icon-tootltip">{tag.toLocaleUpperCase()}</span>
                            <i className={fontAwsomeTable[tag.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()] || fontAwsomeTable['question']} ></i>
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