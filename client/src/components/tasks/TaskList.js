import { Fragment, useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import Task from "./Task";

const TaskList = () => {

    // Get project state
    const projectContext = useContext(ProjectContext);
    const { project, deleteProject } = projectContext;

    // If no project is selected
    if (!project) return <h2>Select a project</h2>;

    // Array destructuring for extract actual project
    const [ actualProject ] = project;

    const ProjectTasks = [];

    // Delete a project
    const onClickDeleteProject = () => {
        deleteProject(actualProject.id); 
    }

    return (  


        <Fragment>

            <h2>Project: { actualProject.name }</h2>

            <ul className="listado-tareas">
                { ProjectTasks.length === 0 
                    ? (<li className="tarea"><p>There are no tasks</p></li>)
                    : ProjectTasks.map(task => (
                        <Task
                            task={task}
                        />
                    ))
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