import { useReducer } from "react"
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer"
import { v4 } from "uuid";
import { 
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    DELETE_PROJECT
} from "../../types"


const ProjectState = props => {

    // For dispatch
    const projects = [
        { id: 1, name: 'Cool Virtual Store' },
        { id: 2, name: 'Intranet' }, 
        { id: 3, name: 'Website Design' }
    ]

    const initialState = { 
        projects: [],
        form: false,
        formerror: false,
        project: null
    }

    // Dispatch for exec actions
    const [ state, dispatch ] = useReducer(ProjectReducer, initialState);

    // CRUD functions 
    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    // Get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    // Add new project
    const addProject = project => {
        project.id = v4();

        // Insert project in state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    // Validate form and show errors
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    // Select project that user clicked
    const actualProject = projectId => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectId
        })
    }

    // Delete a project
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }
    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formerror: state.formerror,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                actualProject,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState; 