import api from "./api";

export async function adicionarAlbum(album) {
    const { data } = await api.post("/album", album);
  
    return data;
  }