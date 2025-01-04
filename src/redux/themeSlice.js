import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    setTheme(state, action) {
      state.isDarkTheme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;

// Async action to load theme preference
export const loadTheme = () => async dispatch => {
  const storedTheme = await AsyncStorage.getItem('themePreference');
  if (storedTheme !== null) {
    dispatch(setTheme(storedTheme === 'dark'));
  }
};

// Async action to toggle and save theme preference
export const toggleTheme = () => async (dispatch, getState) => {
  const currentTheme = getState().theme.isDarkTheme;
  const newTheme = !currentTheme;
  await AsyncStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
  dispatch(setTheme(newTheme));
};

export default themeSlice.reducer;
