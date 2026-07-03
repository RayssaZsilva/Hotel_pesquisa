import "./login.css";

function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Entrar</h1>
        <p>Acesse sua conta para ver os detalhes do hotel.</p>

        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>
        </form>

        <p>
          Ainda não tem conta? <a href="#">Criar conta</a>
        </p>
      </section>
    </main>
  );
}

export default Login;