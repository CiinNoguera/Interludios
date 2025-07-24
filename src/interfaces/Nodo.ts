export interface Opcion {
  texto: string;
  nextId: string; 
}

export interface Nodo {
  id: string;
  raiz: boolean;
  texto: string;
  opciones: Opcion[];
}
