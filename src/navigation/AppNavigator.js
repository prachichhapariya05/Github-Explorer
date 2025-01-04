import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const {colors} = useTheme();

  const headerStyles = {
    headerStyle: {
      backgroundColor: colors.card,
      shadowColor: 'transparent',
    },
    headerTintColor: colors.text,
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
    },
    headerTitleAlign: 'center',
  };

  const CustomHeaderTitle = ({title}) => (
    <View style={styles.headerContainer}>
      <Icon
        name="logo-github"
        size={24}
        color={colors.primary}
        style={styles.icon}
      />
      <Text style={[styles.headerTitle, {color: colors.text}]}>{title}</Text>
    </View>
  );

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...headerStyles,
        headerTitle: props => <CustomHeaderTitle {...props} />,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle title="GitHub Explorer" />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle title="Repository Details" />,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{headerTitle: () => <CustomHeaderTitle title="Favorites" />}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
