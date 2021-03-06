import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTOS, 
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL
} from "../../types";


export default (state, action) => {
  switch (action.type) {

    case FORMULARIO_PROYECTO:
      return{
        ...state,
        formularioNuevoProyecto: true
      }
    
    case OBTENER_PROYECTOS:
      return{
        ...state,
        proyectos: action.payload
      }
    case AGREGAR_PROYECTO:
      return{
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formularioNuevoProyecto: false,
        errorformulario: false
      }
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true
      }
    case PROYECTO_ACTUAL:
      return{
        ...state,
        proyectoSeleccionado : state.proyectos.filter(proyecto => proyecto.id === action.payload)
      }
    default:
      return state;
  }
};
