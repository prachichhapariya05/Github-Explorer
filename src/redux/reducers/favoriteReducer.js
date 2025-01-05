const initialState = {
  favorites: [],
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {...state, favorites: [...state.favorites, action.payload]};
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          repo => repo.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

// const initialState = {
//   favorites: [],
// };

// export default function favoriteReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_FAVORITE':
//       return {...state, favorites: [...state.favorites, action.payload]};
//     case 'REMOVE_FAVORITE':
//       return {
//         ...state,
//         favorites: state.favorites.filter(
//           repo => repo.id !== action.payload.id,
//         ),
//       };
//     default:
//       return state;
//   }
// }

// const initialState = [];

// export default function favoriteReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_FAVORITE':
//       return [...state, action.payload];
//     case 'REMOVE_FAVORITE':
//       return state.filter(repo => repo.id !== action.payload.id);
//     default:
//       return state;
//   }
// }
