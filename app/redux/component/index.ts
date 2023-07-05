import { createSlice } from '@reduxjs/toolkit'

interface IState {
  sidebarStatus: boolean
}
const initialState: IState = {
  sidebarStatus: true
}

const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    controlSidebar: (state) => { state.sidebarStatus = !state.sidebarStatus }
  }
})

export default componentSlice.reducer
export const { controlSidebar } = componentSlice.actions
