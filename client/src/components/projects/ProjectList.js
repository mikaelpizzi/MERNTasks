import { useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import Project from "./Project";

const ProjectList = () => {

    // Extract projects from initial state
    const projectContext = useContext(ProjectContext);
    const { projects } = projectContext;

    // Check if projects have content
    if (projects.length === 0) return null;

    return (  
        <ul className="listado-proyectos">
            {projects.map((project) => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    );
}
 
export default ProjectList;