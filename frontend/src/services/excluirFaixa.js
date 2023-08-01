import api from "./api";

export function excluirFaixa(id) {
    return api.delete(`/track/${id}`);
  }