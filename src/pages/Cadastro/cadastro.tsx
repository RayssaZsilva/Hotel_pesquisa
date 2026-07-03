import "./cadastro.css";

function Cadastro() {
  return (
    <main className="cadastro-page">
      <section className="cadastro-card">
        <h1>Criar conta</h1>

        <p>Cadastre-se para reservar hotéis.</p>

        <form>

          <input
            type="text"
            placeholder="Nome completo"
          />

          <input
            type="email"
            placeholder="E-mail"
          />

          <input
            type="password"
            placeholder="Senha"
          />

          <input
            type="password"
            placeholder="Confirmar senha"
          />

          <button type="submit">
            Criar conta
          </button>

        </form>

        <p>
          Já possui uma conta?
          <a href="#"> Entrar</a>
        </p>

      </section>
    </main>
  );
}

export default Cadastro;