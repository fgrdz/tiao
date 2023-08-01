import api from "./api";

export async function adicionarFaixa(track) {
    const { data } = await api.post('/track', track);
  
    return data;
  }