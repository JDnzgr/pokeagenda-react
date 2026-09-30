import './Footer.css';

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="pokedex-footer">
      <p>
        © {anoAtual} PokéAgenda. Dados consumidos da PokéAPI.
      </p>

      <nav aria-label="Links de documentação e código fonte">
        <a
          href="https://pokeapi.co"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar site oficial da PokéAPI"
        >
          PokéAPI
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver código fonte no GitHub"
        >
          GitHub
        </a>
      </nav>
    </footer>
  );
}