import './styles/App.css';
import PokemonImage from './components/PokemonImage';

function App() {
  return (
    <div className="App">
      <h1>오늘의 포켓몬</h1>
      <span>오늘 당신의 동료는?</span>
      <PokemonImage />
    </div>
  );
}

export default App;
