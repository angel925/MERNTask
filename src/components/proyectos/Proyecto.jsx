import { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContex";

const Proyecto = ({ proyecto }) => {

  //obtener el state de proyectod 
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  return (
    <li>
      <button 
      type="button" 
      className="btn btn-blank" 
      onClick = {()=> proyectoActual(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
