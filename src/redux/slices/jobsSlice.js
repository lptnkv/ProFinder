let initialState = [
  {
    "id": 1,
    "name": "Чистка компьютера",
    "descr": "Очищу компьютер от пыли",
    "price": 1000,
    "creator_id": 2
  },
  {
    "id": 2,
    "name": "подкачка шин",
    "descr": "накачаю шины",
    "price": 500,
    "creator_id": 2
  },
  {
    "id": 3,
    "name": "репетитор",
    "descr": "по английскому",
    "price": 500,
    "creator_id": 2
  },
]

export default function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case 'jobs/addJob': {
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    }
    case 'jobs/removeJob': {
      return {
        ...state,
        jobs: state.jobs.filter((item, index) => index !== action.payload)
      }
    }
    default:
      return state
  }
}