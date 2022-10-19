import { Fragment, useContext, useState } from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const NewProject = () => {

    // Get form state
    const projectContext = useContext(ProjectContext);
    const { form, showForm, addProject } = projectContext;

    // Project's state
    const [ project, saveProject ] = useState({
        name: ''
    });

    // Extract project's name
    const { name } = project

    // Read input content
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    // When user adds project
    const onSubmitProject = e => {
        e.preventDefault();

        // Validate project
        if (name === '') return;

        // Add to state
        addProject(project);

        // Restart form
        saveProject({
            name: ''
        })
    }

    // Show new project form
    const onClickNewProject = () => {
        showForm();
    }
    return (  
        <Fragment>

        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickNewProject}
        >New Project</button>

        {
            form ?
                (
                    <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProject}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Project Name"
                        name="name"
                        value={name}
                        onChange={onChangeProject}
                    />
        
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Add Project"
                    />
                </form>
                )
            : null
        }
        </Fragment>
    );
}
 
export default NewProject;