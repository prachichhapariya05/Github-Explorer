import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const loadThemePreference = async () => {
      const storedTheme = await AsyncStorage.getItem('themePreference');
      console.log('storedTheme', storedTheme);
      if (storedTheme !== null) {
        setIsDarkTheme(storedTheme === 'dark');
      }
    };
    loadThemePreference();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    await AsyncStorage.setItem('themePreference', newTheme ? 'dark' : 'light');
  };
  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer theme={theme}>
          <View style={styles.toggleContainer}>
            <TouchableOpacity onPress={toggleTheme}>
              <Icon
                name={isDarkTheme ? 'sunny' : 'moon'}
                size={24}
                color={theme.colors.text}
              />
            </TouchableOpacity>
          </View>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 10,
    // backgroundColor: 'transparent',
  },
});

export default App;
