import { useReducer } from "react"
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
    }

    // Create dispatch and state
    const [ state, dispatch ] = useReducer(TaskReducer, initialState);

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;