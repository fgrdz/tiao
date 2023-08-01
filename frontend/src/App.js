import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Album from './components/album';
import SearchBar from './components/searchBar';
import Faixa from './components/faixa';
import Form from './components/form';
import api from './services/api';
import FormFaixa from './components/formFaixa';

function App() {
  const [album, setAlbum] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  
  

  useEffect(() => {
    async function getAlbum() {
      try {
        const response = await api.get('/album');
        setAlbum(response.data.data);
      } catch (error) {
        console.error('Erro ao obter os álbuns:', error);
      }
    }
    getAlbum();
  }, []);



  const handleSearch = async (searchTerm) => {
    try {
      const response = await api.get(`/album?q=${searchTerm}`);
      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Erro ao pesquisar:', error);
      setSearchResults([]);
    }
  };

  return (
    <div className='App'>
      <header>
        <Banner />
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((albumItem) => (
              <div key={albumItem.id}>
                <Album id={albumItem.id} name={albumItem.name} year={albumItem.year} />
                {albumItem.tracks.map((track) => (
                  <Faixa
                    key={track.id}
                    id={track.id}
                    number={track.number}
                    title={track.title}
                    duration={track.duration}
                  />
                ))}
                <FormFaixa  albumId={albumItem.id} />
              </div>
            ))
          ) : (
            <p id='none'>Nenhum resultado encontrado.</p>
          )}
        </ul>
        <div className="form">
          <Form />
        </div>
      </main>
    </div>
  );
}

export default App;