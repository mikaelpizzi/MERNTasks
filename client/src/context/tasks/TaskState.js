import { useReducer } from "react"
import { 
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    TASK_STATE
} from "../../types";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer"

const TaskState = (props) => {
    const initialState = {
        tasks: [
            {id: 1, name: 'Choose Platform', state: true, projectId: 1},
            {id: 2, name: 'Choose Colors', state: false, projectId: 2},
            {id: 3, name: 'Choose Payment Platforms', state: false, projectId: 3},
            {id: 4, name: 'Choose Hosting', state: true, projectId: 4},
            {id: 5, name: 'Choose Platformo', state: true, projectId: 3},
            {id: 6, name: 'Choose Colors (cool colors)', state: false, projectId: 1},
            {id: 7, name: 'Choose Payment Platforms (no Paypal)', state: false, projectId: 1},
            {id: 8, name: 'Choose Platform (a cool one)', state: true, projectId: 2},
            {id: 9, name: 'Choose Colors', state: false, projectId: 4},
            {id: 10, name: 'Choose Payment Platforms', state: false, projectId: 2},
            {id: 11, name: 'Choose Platform', state: true, projectId: 4},
            {id: 12, name: 'Choose Colors', state: false, projectId: 3},
            {id: 13, name: 'Choose Payment Platforms', state: false, projectId: 4},
        ],
        projecttasks: null,
        taskerror: false
    }

    // Create dispatch and state
    const [ state, dispatch ] = useReducer(TaskReducer, initialState);

    // Create CRUD functions

    // Get tasks from a project
    const getTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    // Add new task to the selected project
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    // Validate and show error if necessary
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK,
        })
    }

    // Delete task by id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    // Change task state
    const changeTaskState = task => {
        dispatch({
            type: TASK_STATE,
            payload: task
        })
    }
    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projecttasks: state.projecttasks,
                taskerror: state.taskerror,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeTaskState
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;