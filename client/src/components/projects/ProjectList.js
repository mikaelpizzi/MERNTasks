import { useContext, useEffect } from "react";
import ProjectContext from "../../context/projects/ProjectContext";
import Project from "./Project";
import { TransitionGroup, CSSTransition } from "react-transition-group"

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
            <TransitionGroup>
            {projects.map((project) => (
                <CSSTransition
                    key={project.id}
                    timeout={200}
                    classNames="proyecto"
                >
                    <Project
                        project={project}
                    />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ProjectList;