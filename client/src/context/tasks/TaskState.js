import { useReducer } from "react"
import { 
    PROJECT_TASKS,
    ADD_TASK
} from "../../types";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer"

const TaskState = (props) => {
    const initialState = {
        tasks: [
            {name: 'Choose Platform', state: true, projectId: 1},
            {name: 'Choose Colors', state: false, projectId: 2},
            {name: 'Choose Payment Platforms', state: false, projectId: 3},
            {name: 'Choose Hosting', state: true, projectId: 4},
            {name: 'Choose Platformo', state: true, projectId: 3},
            {name: 'Choose Colors (cool colors)', state: false, projectId: 1},
            {name: 'Choose Payment Platforms (no Paypal)', state: false, projectId: 1},
            {name: 'Choose Platform (a cool one)', state: true, projectId: 2},
            {name: 'Choose Colors', state: false, projectId: 4},
            {name: 'Choose Payment Platforms', state: false, projectId: 2},
            {name: 'Choose Platform', state: true, projectId: 4},
            {name: 'Choose Colors', state: false, projectId: 3},
            {name: 'Choose Payment Platforms', state: false, projectId: 4},
        ],
        projecttasks: null
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

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projecttasks: state.projecttasks,
                getTasks,
                addTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;