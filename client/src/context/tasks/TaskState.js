import { useReducer } from "react"
import { 
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    TASK_STATE,
    ACTUAL_TASK,
    UPDATE_TASK,
    CLEAN_TASK
} from "../../types";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import { v4 } from "uuid";

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
        taskerror: false,
        selectedtask: null
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
        task.id = v4();
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

    // Extract a task for edition
    const saveActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    // Edit or modify a task
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    // Delete selected task (for editing) from state
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }
    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projecttasks: state.projecttasks,
                taskerror: state.taskerror,
                selectedtask: state.selectedtask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeTaskState,
                saveActualTask,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;