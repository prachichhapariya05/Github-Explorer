const initialState = {
  list: [],
};

export default function repositoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_REPOSITORIES':
      return {...state, list: action.payload};
    default:
      return state;
  }
}
