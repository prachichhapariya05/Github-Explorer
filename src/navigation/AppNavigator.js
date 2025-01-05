import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

const Stack = createStackNavigator();

export default function AppNavigator({toggleTheme, isDarkTheme}) {
  const {colors} = useTheme();

  const headerLeft = () => (
    <View style={styles.headerLeftContainer}>
      <Icon
        name="logo-github"
        size={30}
        color={colors.primary}
        style={styles.icon}
      />
      <Text style={[styles.headerTitle, {color: colors.text}]}>
        GitHub Explorer
      </Text>
    </View>
  );

  const headerRight = navigation => (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity onPress={toggleTheme} style={styles.iconContainer}>
        <Icon
          name={isDarkTheme ? 'sunny' : 'moon'}
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Favorites')}
        style={styles.iconContainer}>
        <Icon name="heart" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: colors.card},
        headerTintColor: colors.text,
        headerLeft: headerLeft,
        headerRight: () => headerRight(navigation),
      })}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
