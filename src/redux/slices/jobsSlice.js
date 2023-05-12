export default function jobsReducer(state = initialState, action) {
    switch (action.type) {
      case 'jobs/addJob': {
        return {
          ...state,
          status: action.payload
        }
      }
      default:
        return state
    }
  }