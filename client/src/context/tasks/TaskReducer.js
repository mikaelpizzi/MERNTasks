import { 
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    TASK_STATE,
    ACTUAL_TASK
} from "../../types";

export default (state, action) => {
    switch(action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projecttasks: state.tasks.filter( task => task.projectId === action.payload )
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                taskerror: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                taskerror: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter( task => task.id !== action.payload )
            }
        case TASK_STATE:
            return {
                ...state,
                tasks: state.projecttasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        case ACTUAL_TASK:
            return {
                ...state,
                selectedtask: action.payload
            }
        default:
            return state;
    }
}