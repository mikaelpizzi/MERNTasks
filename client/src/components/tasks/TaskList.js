import { Fragment } from "react";
import Task from "./Task";

const TaskList = () => {

    const ProjectTasks = [
        {name: 'Choose Platform', state: true},
        {name: 'Choose Colors', state: false},
        {name: 'Choose Payment Platforms', state: false},
        {name: 'Choose Hosting', state: true}
    ];

    return (  


        <Fragment>

            <h2>Project: Example Store</h2>

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