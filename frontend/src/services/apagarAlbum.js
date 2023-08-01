import api from "./api";


export function apagarAlbum(id) {
  return api.delete(`/album/${id}`);
}