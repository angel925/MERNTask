import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid'
import proyectoContext from "./proyectoContex";
import proyectoReducer from "./proyectoReducer";
import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTOS, 
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL
} from "../../types";


const ProyectoState = (props) => {

  const proyectos =  [
    { id:1, nombre:'Tienda virtual Machine' },
    { id:2, nombre:'Comic Tomi 11 galaxi' },
    { id:3, nombre:'Play List of them 22' },
    { id:4, nombre:'Box 2322' }
  ]
  
  const initialState = {
    proyectos : [],
    formularioNuevoProyecto: false,
    errorformulario: false,
    proyectoSeleccionado : null
  };

  //Dispach para ejecutar las acciones
  const [state, dispach] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD

  const mostrarFormularioNuevoProyecto = () => {
    dispach({
      type: FORMULARIO_PROYECTO
    })
  }

  //obtener los proyectos
  const obtenerProyectos = () => {
    dispach({
      type: OBTENER_PROYECTOS,
      payload : proyectos

    })
  }

  // Agregar nuevo proyecto
  const agregarProyecto = proyecto =>{
    proyecto.id = uuidv4();
    console.log(uuidv4())

      //insertar el proycto en el state
      dispach({
        type: AGREGAR_PROYECTO,
        payload: proyecto
      })
  }

  //Validar el formulario por errores
  const mostrarError = ()=>{
    dispach({
      type: VALIDAR_FORMULARIO
    })
  }

  // seleccional el proyecto al cual el usuario dio el click
  const proyectoActual = proyectoId =>{
    dispach({
      type : PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }

  return (
      <proyectoContext.Provider
      /* Recomendable los estate arriba y las funciones abajo */
      value = {{
        proyectos : state.proyectos,
        formularioNuevoProyecto: state.formularioNuevoProyecto,
        errorformulario: state.errorformulario,
        proyectoSeleccionado : state.proyectoSeleccionado,
        mostrarFormularioNuevoProyecto,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual
      }}
      >
          {props.children}
      </proyectoContext.Provider>
  );
};

export default ProyectoState;