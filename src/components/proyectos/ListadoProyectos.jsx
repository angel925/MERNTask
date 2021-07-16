import { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContex";

const ListadoProyectos = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //Obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  //Revisar si los proyectos tienen agun dato
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
