import { useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const Project = ({ project }) => {

    // Get project state
    const projectContext = useContext(ProjectContext);
    const { actualProject } = projectContext;

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => actualProject(project.id) }
            >{project.name}</button>
        </li>
    );
}
 
export default Project;