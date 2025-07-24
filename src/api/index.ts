import axios from "axios";
import type { Nodo } from "../interfaces/Nodo";

const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getNodos = async () : Promise<Nodo[]> => {
  const response = await API.get('/interludes');
  return response.data;
};

export const getNodoRaiz = async (): Promise<Nodo> => {
  const response = await API.get('/interludes/root');
  return response.data;
};

export const getNodoPorId = async (id: string): Promise<Nodo> => {
  const response = await API.get(`/interludes/${id}`);
  return response.data;
};


export default API;