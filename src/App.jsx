import { Header } from './Header';
import { Footer } from './Footer';
import { PokemonGrid } from './PokemonGrid';

export function App() {
  return (
    <div className="app-container">
      <Header />
      <PokemonGrid />
      <Footer />
    </div>
  );
}

export default App;