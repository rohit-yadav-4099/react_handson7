
import { configureStore } from '@reduxjs/toolkit'
import StuSlice from '../Slice/Slice'

const StuStore = configureStore({
    reducer: {
        Student: StuSlice
    }

})

export default StuStore
