import "./HotelCard.css"

interface HotelCardProps {
    nome:string;
    cidade:string;
    imagem: string;
    avaliacao: number;
    preco:number;
}
function HotelCard ({ nome, cidade, imagem, avaliacao, preco }: HotelCardProps) {
    return(
        <article>

            <img src={imagem} alt={nome} />

        <div>

            <h3>{nome}</h3>
            <p>{cidade}</p>
            <p>★ : {avaliacao}</p>
            <p>R$ {preco.toFixed(2)} / noite</p>

            <button>Ver detalhes</button>
            
            </div>

        </article>
    )

}

export default HotelCard;