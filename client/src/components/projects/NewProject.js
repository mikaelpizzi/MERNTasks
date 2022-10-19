import { Fragment, useState } from "react";

const NewProject = () => {

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

        // Add to state

        // Restart form
    }
    return (  
        <Fragment>

        <button
            type="button"
            className="btn btn-block btn-primario"
        >New Project</button>

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
        </Fragment>
    );
}
 
export default NewProject;