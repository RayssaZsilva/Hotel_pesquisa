import SearchBar from "../../components/common/SearchBar";
import HotelCard from "../../components/hotel/HotelCard";
import hotel1 from "../../assets/img/hotel1.jfif";
import  hotel2 from "../../assets/img/hotel2.jfif";
import "./Home.css";

function  Home () {

    return(
    <main>
        <section>
        <p>Olá!</p>
        <h1>Encontre sua proxima hospedagem.</h1>

        <p>Compare os preços entre milhares de hotéis. </p>

        <SearchBar/>

        </section>

        <section>
            <h3>Proximos de você:... </h3>

         <div className="hotel-list">  
            <HotelCard
                nome="interior de são paulo"
                cidade="São Paulo"
                imagem={hotel1}
                avaliacao={4.8}
                preco={1200}
            />

            <HotelCard
                nome="Piscina aquecida"
                cidade="MG"
                imagem={hotel2}
                avaliacao={4.8}
                preco={1200}
            />
        </div> 

        </section>

        <section>
            <h3>Mais bem avaliados:..</h3>
            <div>...</div>
        </section>

        <section>
            <h3>Promoções:...</h3>
            <div>...</div>
        </section>
        </main>
    );
}

export default Home;