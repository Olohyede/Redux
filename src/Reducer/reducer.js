const initialState = {
    tasks: [
        { id: 1, description: 'Task 1', isDone: false },
        { id: 2, description: 'Task 2', isDone: true },
      
    ]
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                    ? { ...task, description: action.payload.description, isDone: action.payload.isDone } : task
                )
            };

            default:
                return state;
        }
    };
    
    export default tasksReducer;