import { useReducer } from "react"
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer"
import { PROJECT_FORM } from "../../types"

const ProjectState = props => {
    const initialState = {
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

    return (
        <ProjectContext.Provider
            value={{
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState; 