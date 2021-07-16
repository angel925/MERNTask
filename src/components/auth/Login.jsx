import { useState } from "react";
import { Link} from 'react-router-dom'

const Login = () => {

// State para inicio de sesión 
    const [usuario, guardarUsuario] = useState({
        email:'',
        password: ''
    });

    //extraer los valores del usuario 
    const {email,password} = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    });
  
  };

  // cuando el usuario queire iniciar sesion
  const onSubmit = e => {
    e.preventDefault();

    //validar que no haya campos vacios


    // Pasarlo al action

  }
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form
        onSubmit = {onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value = {email}
              placeholder="¡Tú Email Aqui!"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value = {password}
              placeholder="¡Tú Password Aqui!"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar sesión"
            />
          </div>
        </form>

        <Link to = {'/nueva-cuenta'} className="enlace-cuenta">
          Obteber Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
