import { useContext } from "react";
import { Fragment, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContex";

const NuevoProyecto = () => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);

  //extraer de proyectosContext
  const {
    formularioNuevoProyecto,
    errorformulario,
    mostrarFormularioNuevoProyecto,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  //state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // extraer datos de proyecto
  const { nombre } = proyecto;

  // Lee el contenido del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario envia o crea un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //agregar al state
    agregarProyecto(proyecto);

    //reiniciar el form
    guardarProyecto({
      nombre: "",
    });
  };

  //mostrar el formulario mandar a llamar la funcion desde otra funcion
  const onClickFormulario = () => {
    mostrarFormularioNuevoProyecto();
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      {formularioNuevoProyecto ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {errorformulario ? (
        <p className="mensaje error">El nobre del Proyecto es Obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;