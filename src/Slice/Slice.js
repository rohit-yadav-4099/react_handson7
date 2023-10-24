import { createSlice } from "@reduxjs/toolkit";

const StuData = [
    { name: "Rohit", age: 22, batch: "2023", course: "B.tech" },
    { name: "Rani", age: 21, batch: "2023", course: "B.tech" },
    { name: "Soni", age: 22, batch: "2022", course: "BCA" },
    { name: "Rosh", age: 25, batch: "2022", course: "BA" },
    { name: "Divya", age: 20, batch: "2020", course: "BSC" },
    { name: "Priyanka", age: 22, batch: "2019", course: "M.tech" },
    { name: "Virat", age: 19, batch: "2021", course: "B.com" }
]

const StuSlice = createSlice({
    name: "student_data",
    initialState: StuData,
    reducers: {
        editStudent: (state, action) => {
            state[action.payload.index] = action.payload.info
        },
        addStudent: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { editStudent, addStudent } = StuSlice.actions;
export default StuSlice.reducer;