import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContex";

const ListadoTareas = () => {

 //Extraer proyectos de state inicial
 const proyectosContext = useContext(proyectoContext);
 const { proyecto } = proyectosContext;

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Fuentes", estado: true },
    { nombre: "Elegir Iconos", estado: false },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            {" "}
            <p>No hay Tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proycto Actual &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
