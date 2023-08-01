import CloseIcon from '@mui/icons-material/Close';
import './album.css';
import { apagarAlbum } from '../../services/apagarAlbum';

const Album = ({ id, name, year, tracks }) => {
  async function handleDelete() {
    
    await apagarAlbum(id);
      
  }

  return (
    <div className='container_albuns'>
      <div className='cabecalho'>
          <p id="album">Álbum: {name}, {year}</p>
          < a className='btn-excluir' onClick={handleDelete}><CloseIcon fontSize={'16px'} /></a>
      </div>
      
      <div className='bar'>
        <p className='titulo'></p>
        <p></p>
        <ul>
          <li>{tracks}</li>
        </ul>
        
      </div>
    </div>
  );
}

export default Album;
