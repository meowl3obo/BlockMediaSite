const initialState = {
  sidebarStatus: false
}

const componentReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, sidebarStatus: true }
    case "CLOSE":
      return { ...state, sidebarStatus: false }
  }
}

export default componentReducer