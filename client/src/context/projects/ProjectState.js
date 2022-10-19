import { useReducer } from "react"
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer"
import { v4 } from "uuid";
import { 
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT
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
        form: false
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

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects,
                addProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState; 