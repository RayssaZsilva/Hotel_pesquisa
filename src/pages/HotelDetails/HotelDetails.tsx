import { useParams } from "react-router-dom";
function HotelDetails() {
  const { id } = useParams();

  return (
    <main>

    <h1>Detalhes do hotel</h1> 
    
    <p>Id do hotel: {id}</p>

    </main>
  );
}

export default HotelDetails;