import { useContext, useEffect } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import Project from "./Project";

const ProjectList = () => {

    // Extract projects from initial state
    const projectContext = useContext(ProjectContext);
    const { projects, getProjects } = projectContext;

    // Get projects when component loads
    useEffect(() => {
        getProjects();
    }, [])

    // Check if projects have content
    if (projects.length === 0) return <p className="message">There are no projects, start by creating one!</p>;


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