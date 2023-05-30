const { createSlice } = require("@reduxjs/toolkit");


const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addToDo: (state, action) => {
          state.todos.push(action.payload)
        },
        removeToDo: (state,action) => {
            state.todos = state.todos.filter(q => q.id != action.payload)
        },
        empty: (state) => {
            state.todos = []
        }
    }
})

export const {addToDo, removeToDo, empty} = todoSlice.actions

export default todoSlice.reducer