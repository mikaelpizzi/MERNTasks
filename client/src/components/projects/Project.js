import { useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Project = ({ project }) => {

    // Get projects state
    const projectContext = useContext(ProjectContext);
    const { actualProject } = projectContext;

    // Get tasks state
    const taskContext = useContext(TaskContext)
    const { getTasks } = taskContext;

    // Function to add actual project
    const selectProject = id => {
        actualProject(id); // Pin an actual project
        getTasks(id); // Get tasks for that specific project
    }

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => selectProject(project.id)}
            >{project.name}</button>
        </li>
    );
}
 
export default Project;