import { useEffect, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import HotelCard from "../../components/hotel/HotelCard";
import { buscarHoteis } from "../../services/hotelService";
import "./Home.css";

function Home() {
  const [hotels, setHotels] = useState<any[]>([]);

  useEffect(() => {
    async function carregarHoteis() {
      const dados = await buscarHoteis();

      console.log(dados);
      console.log(dados.results[0]);

      // Por enquanto ainda não vamos setar na tela
      setHotels(dados.results);

      
    }

    carregarHoteis();
  }, []);

  return (
    <main>
      <section>
        <p>Olá!</p>
        <h1>Encontre sua próxima hospedagem.</h1>
        <p>Compare os preços entre milhares de hotéis.</p>

        <SearchBar />
      </section>

      <section>
        <h3>Próximos de você...</h3>

        <div className="hotel-list">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.hotel_id}
              id={hotel.hotel_id}
              nome={hotel.hotel_name}
              cidade={hotel.city}
              imagem={hotel.main_photo_url}
              avaliacao={hotel.review_score || 0}
              preco={hotel.min_total_price || 0}
            />
          ))}
        </div>
      </section>

      <section>
        <h3>Mais bem avaliados...</h3>
        <div>...</div>
      </section>

      <section>
        <h3>Promoções...</h3>
        <div>...</div>
      </section>
    </main>
  );
}

export default Home;