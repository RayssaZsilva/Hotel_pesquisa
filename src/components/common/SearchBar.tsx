import { useState } from "react";
import "./searchBar.css";

type SearchBarProps = {
  onBuscar: (
    cidade: string,
    checkin: string,
    checkout: string,
    adultos: number,
    criancas: number,
    quartos: number
  ) => void;
};

function SearchBar({ onBuscar }: SearchBarProps) {
  const [cidade, setCidade] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adultos, setAdultos] = useState(2);
  const [criancas, setCriancas] = useState(0);
  const [quartos, setQuartos] = useState(1);

  function enviarBusca() {
    if (!cidade || !checkin || !checkout) {
      alert("Preencha cidade, check-in e check-out.");
      return;
    }

    onBuscar(
      cidade,
      checkin,
      checkout,
      adultos,
      criancas,
      quartos
    );
  }

  return (
    <div className="search-bar">

      <div className="search-item cidade">
        <label>Destino</label>

        <input
          type="text"
          placeholder="Ex: Gramado"
          value={cidade}
          onChange={(e) =>
            setCidade(e.target.value)
          }
        />
      </div>

      <div className="search-item">
        <label>Check-in</label>

        <input
          type="date"
          value={checkin}
          onChange={(e) =>
            setCheckin(e.target.value)
          }
        />
      </div>

      <div className="search-item">
        <label>Check-out</label>

        <input
          type="date"
          value={checkout}
          onChange={(e) =>
            setCheckout(e.target.value)
          }
        />
      </div>

      <div className="search-item pequeno">
        <label>Adultos</label>

        <input
          type="number"
          min="1"
          value={adultos}
          onChange={(e) =>
            setAdultos(Number(e.target.value))
          }
        />
      </div>

      <div className="search-item pequeno">
        <label>Crianças</label>

        <input
          type="number"
          min="0"
          value={criancas}
          onChange={(e) =>
            setCriancas(Number(e.target.value))
          }
        />
      </div>

      <div className="search-item pequeno">
        <label>Quartos</label>

        <input
          type="number"
          min="1"
          value={quartos}
          onChange={(e) =>
            setQuartos(Number(e.target.value))
          }
        />
      </div>

      <button onClick={enviarBusca}>
        Buscar
      </button>

    </div>
  );
}

export default SearchBar;