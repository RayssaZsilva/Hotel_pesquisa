import SearchBar from "../../components/common/SearchBar";

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
            <div>{/*A lista de hoteis ficara aqui*/}</div>
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