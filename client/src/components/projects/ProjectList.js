import Project from "./Project";

const ProjectList = () => {

    const projects = [
        {name: 'Virtual Store'},
        {name: 'Intranet'}, 
        {name: 'Website Design'}
    ]

    return (  
        <ul className="listado-proyectos">
            {projects.map((project) => (
                <Project
                    project={project}
                />
            ))}
        </ul>
    );
}
 
export default ProjectList;