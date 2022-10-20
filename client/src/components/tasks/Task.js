import { useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Task = ({ task }) => {

    // Extract if a project is active
    const projectContext = useContext(ProjectContext);
    const { project } = projectContext;

    // Get context task function deleteTask
    const taskContext = useContext(TaskContext);
    const { deleteTask, getTasks, changeTaskState } = taskContext;

    // Extract actual project
    const [ actualProject ] = project;

    // Function that executes when user press delete task button
    const onClickDeleteTask = id => {
        deleteTask(id);
        getTasks(actualProject.id);
    }

    // Function to modify task state
    const onClickChangeState = task => {
        if (task.state) {
            task.state = false;
        } else {
            task.state = true;
        }

        changeTaskState(task);
    }

    return (  
        <li className="tarea sombra">
            <p>{task.name}</p>

            <div className="estado">
                { task.state
                ? 
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => onClickChangeState(task)}
                        >Completed</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => onClickChangeState(task)}
                        >Not Completed</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Edit</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => onClickDeleteTask(task.id)}
                >Delete</button>
            </div>
        </li>
    );
}
 
export default Task;