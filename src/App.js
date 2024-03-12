import { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoins from './components/TableCoins';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    try {
      const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1");
      console.log(res.data);
      setCoins(res.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
      // Manejar el error de acuerdo a tus necesidades, por ejemplo:
      // Mostrar un mensaje de error al usuario
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control bg-dark text-light border-0 mt-4 text-center"
        />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
