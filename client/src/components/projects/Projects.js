import Bar from "../layout/Bar";
import Sidebar from "../layout/Sidebar";
import TaskForm from "../tasks/TaskForm";
import TaskList from "../tasks/TaskList";

const Projects = () => {
    return (  
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Bar />

                <main>
                    <TaskForm />

                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Projects;