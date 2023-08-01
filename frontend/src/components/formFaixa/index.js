import {  useState } from 'react';
import './formFaixa.css';
import { adicionarFaixa } from '../../services/adicionarFaixa';

const FormFaixa = ({ albumId}) => {
  const [number, setNumber] = useState('');
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [formVisible, setFormVisible] = useState(false); 


  async function handleSubmit(e) {
    e.preventDefault();
    await adicionarFaixa({
      album_id: albumId,
      number: number,
      title: title,
      duration: duration,
    });

    setNumber('');
    setTitle('');
    setDuration('');

  }

  
  const toggleFormVisibility = () => {
    setFormVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className='container_form_faixa'>
      
      <h2 onClick={toggleFormVisibility}>Adicionar Faixa</h2>
      
      {formVisible && (
        <form onSubmit={handleSubmit} className='cadastro_musica'>
          <label>Numero</label>
          <input value={number} onChange={(e) => setNumber(e.target.value)} />
          <label>Nome</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Duração</label>
          <input value={duration} onChange={(e) => setDuration(e.target.value)} />

          <button type='submit'>Adicionar</button>
        </form>
      )}
    </div>
  );
};

export default FormFaixa;