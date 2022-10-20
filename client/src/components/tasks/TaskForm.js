import { useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const TaskForm = () => {

    // Extract state to know if a project is active
    const projectContext = useContext(ProjectContext);
    const { project } = projectContext;
    
    // If no project is selected
    if (!project) return null;

    // Array destructuring for extract actual project
    const [ actualProject ] = project;

    // When user submits new task form
    const onSubmitTaskForm = e => {
        e.preventDefault();

        // Validate

        // Pass validation

        // Add new task to tasks state

        // Restart form
    }

    return (  
        <div className="formulario">
            <form
                onSubmit={onSubmitTaskForm}
            >
                <div className="contenedor-input">
                    <input  
                        type="text"
                        className="input-text"
                        placeholder="Task Name..."
                        name="name"
                    />
                </div>

                <div className="contenedor-input">
                    <input  
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Add Task"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default TaskForm;