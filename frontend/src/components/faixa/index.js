
import { excluirFaixa } from '../../services/excluirFaixa';
import './faixa.css'
import DeleteIcon from '@mui/icons-material/Delete';
const Faixa = ({id, number, title, duration})=>{

    function formatarDuration(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
      
        const formatar = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        return formatar;
      }

    async function handleDelete(){
       await excluirFaixa(id)
    }
    const minSeg = formatarDuration(duration);

    return(
        <div className="musicas">
            
             <p>{number}</p>
             <p>{title}</p>
             <p>{minSeg}</p> 
             <button onClick={handleDelete} className='delete'><DeleteIcon style={{ fontSize: '18px' }}></DeleteIcon></button>
        </div>
    )
}

export default Faixa