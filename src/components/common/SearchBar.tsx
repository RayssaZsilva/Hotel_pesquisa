import { useState } from "react";
import "../../components/common/searchBar.css";

type SearchBarProps = {
  onBuscar: (
    cidade: string,
    checkin: string,
    checkout: string
  ) => void;
};

function SearchBar({ onBuscar }: SearchBarProps) {
  const [cidade, setCidade] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  function enviarBusca() {
    const cidadeLimpa = cidade.trim();

    if (!cidadeLimpa || !checkin || !checkout) {
      alert("Preencha a cidade, o check-in e o check-out.");
      return;
    }

    if (checkout <= checkin) {
      alert("O check-out precisa ser depois do check-in.");
      return;
    }

    onBuscar(cidadeLimpa, checkin, checkout);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Para onde você vai?"
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
      />

      <input
        type="date"
        value={checkin}
        onChange={(event) => setCheckin(event.target.value)}
      />

      <input
        type="date"
        value={checkout}
        onChange={(event) => setCheckout(event.target.value)}
      />

      <button type="button" onClick={enviarBusca}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;