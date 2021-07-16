import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from "../proyectos/ListadoProyectos";

const Sidebar = () => {

 
  return (
    <aside>
      <h1>O'Clock<span>Tasks</span></h1>
      <NuevoProyecto/>
      <div className="proyectos">
        <h2>Tus Proyectos Crack</h2>

        <ListadoProyectos/>
      </div>
    </aside>
  );
};

export default Sidebar;
