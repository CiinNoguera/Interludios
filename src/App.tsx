import { useEffect, useState } from "react";
import { getNodoPorId, getNodoRaiz } from "./api";
import type { Nodo } from "./interfaces/Nodo";

function App() {
  const [nodoActual, setNodoActual] = useState<Nodo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
     const fetchNodoRaiz = async () => {
      try {
        const nodoInicio = await getNodoRaiz();
        setNodoActual(nodoInicio);
      } catch (err) {
        setError("No se encontró el nodo inicial.");
      } finally {
        setLoading(false);
      }
    };

    fetchNodoRaiz();
  }, []);


   const avanzar = async (nextId: string) => {
    console.log("ID del siguiente nodo:", nextId);
    const siguienteNodo = await getNodoPorId(nextId);
    if (siguienteNodo) {
      setNodoActual(siguienteNodo);
    } else {
      setError(`No se encontró el nodo con ID ${nextId}`);
    }
  };


  if (loading) return <p>Cargando nodos...</p>;
  if (error) return <p>{error}</p>;
  if (!nodoActual) return <p>No hay nodo actual para mostrar</p>;

  return (
    <div>
      <h1>Historia Interactiva</h1>
      <div style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}>
        <p>{nodoActual.texto}</p>
        {nodoActual.opciones && nodoActual.opciones.length > 0 ? (
          <ul>
            {nodoActual.opciones.map((opcion, index) => (
              <li key={index}>
                <button onClick={() => avanzar(opcion.nextId)}>
                  {opcion.texto}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p><em>Fin de la historia.</em></p>
        )}
      </div>
    </div>
  );
}

export default App;
