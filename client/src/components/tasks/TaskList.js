import { Fragment, useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";
import Task from "./Task";
import { CSSTransition, TransitionGroup } from "react-transition-group"

const TaskList = () => {

    // Get project state
    const projectContext = useContext(ProjectContext);
    const { project, deleteProject } = projectContext;

    // Get project tasks
    const taskContext = useContext(TaskContext);
    const { projecttasks } = taskContext;

    // If no project is selected
    if (!project) return <h2>Select a project</h2>;

    // Array destructuring for extract actual project
    const [ actualProject ] = project;

    // Delete a project
    const onClickDeleteProject = () => {
        deleteProject(actualProject.id); 
    }

    return (  


        <Fragment>

            <h2>Project: { actualProject.name }</h2>

            <ul className="listado-tareas">
                { projecttasks.length === 0 
                    ? (<li className="tarea"><p>There are no tasks</p></li>)
                    : 
                    <TransitionGroup>
                     {   projecttasks.map(task => (
                        <CSSTransition
                            key={task.id}
                            timeout={200}
                            classNames="tarea"
                        >
                            <Task
                                task={task}
                            />
                        </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>

            <button
                type="button"
                className="btn btn-delete"
                onClick={onClickDeleteProject}
            >Delete Project &times;</button>
        </Fragment>
    );
}
 
export default TaskList;