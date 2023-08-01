import { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='box'>
      <span>Digite uma palavra chave</span>
      <div>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Procurar</button>
      </div>
    </div>
  );
};

export default SearchBar;