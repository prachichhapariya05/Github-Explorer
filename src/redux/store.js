import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import repositoryReducer from './reducers/repositoryReducer';
import favoriteReducer from './reducers/favoriteReducer';
import themeReducer from './themeSlice';

// Combine reducers
const rootReducer = combineReducers({
  repositories: repositoryReducer,
  favorites: favoriteReducer,
  theme: themeReducer,
});

// Create store using configureStore
const store = configureStore({
  reducer: rootReducer,
});

export default store;
