
import { useState } from 'react';

import './form.css'
import { adicionarAlbum } from '../../services/adicionarAlbum';
const Form = ()=>{
    
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [formVisib, setFormVisib] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
      
          await adicionarAlbum({name,year})
    
          
    
          setName('');
          setYear('');
        
      };
      function toggleFormVisibility(){
          setFormVisib((previsivel)=>(!previsivel))
      }
    
      return (
        <div className='container_form'>
          
            <h2 onClick={toggleFormVisibility}>Adicionar Album</h2>

          {formVisib && <form onSubmit={handleSubmit} className='cadastro_album'>
            <label>Titulo</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <label>Ano</label>
            <input value={year} onChange={(e) => setYear(e.target.value)} />
    
            <button type="submit">Adicionar</button>
          </form>}
        </div>
      );
    };
    
    export default Form;