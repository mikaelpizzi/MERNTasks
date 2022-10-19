import { Fragment, useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import Task from "./Task";

const TaskList = () => {

    // Get project state
    const projectContext = useContext(ProjectContext);
    const { project } = projectContext;

    // If no project is selected
    if (!project) return <h2>Select a project</h2>;

    // Array destructuring for extract actual project
    const [ actualProject ] = project

    const ProjectTasks = [
        {name: 'Choose Platform', state: true},
        {name: 'Choose Colors', state: false},
        {name: 'Choose Payment Platforms', state: false},
        {name: 'Choose Hosting', state: true}
    ];

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
            >Delete Project &times;</button>
        </Fragment>
    );
}
 
export default TaskList;