import { useContext, useState } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const TaskForm = () => {

    // Extract state to know if a project is active
    const projectContext = useContext(ProjectContext);
    const { project } = projectContext;

    // Extract context addTask function
    const taskContext = useContext(TaskContext);
    const { addTask } = taskContext;

    // Form state
    const [ task, saveTask ] = useState({
        name: ''
    })

    // Extract project name
    const { name } = task;
    
    // If no project is selected
    if (!project) return null;

    // Array destructuring for extract actual project
    const [ actualProject ] = project;

    // Read form values
    const handleChangeTaskForm = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    // When user submits new task form
    const onSubmitTaskForm = e => {
        e.preventDefault();

        // Validate

        // Pass validation

        // Add new task to tasks state
        task.projectId = actualProject.id; // Define new task id as actual project id
        task.state = false; // Define new task state as false
        addTask(task);


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
                        value={name}
                        onChange={handleChangeTaskForm}
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