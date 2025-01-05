import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

export default function RepositoryCard({repository, onPress}) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);

  const isFavorite = favorites.some(repo => repo.id === repository.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({type: 'REMOVE_FAVORITE', payload: repository});
    } else {
      dispatch({type: 'ADD_FAVORITE', payload: repository});
    }
  };

  const styles = getStyles(isDarkMode);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{uri: repository.owner.avatar_url}}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{repository.name}</Text>
        <Text style={styles.description}>{repository.description}</Text>
      </View>
      <TouchableOpacity
        onPress={toggleFavorite}
        style={[styles.favoriteIcon, styles.circle, styles.shadow]}>
        <Icon name="heart" size={24} color={isFavorite ? 'red' : 'grey'} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const getStyles = isDarkMode =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: isDarkMode ? '#555' : '#ccc',
      backgroundColor: isDarkMode ? '#3F3F3F' : '#F9F9F9', // Updated colors
      borderRadius: 8,
      marginVertical: 5,
      shadowColor: isDarkMode ? '#000' : '#aaa',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    infoContainer: {
      flex: 1,
    },
    name: {
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000', // White for dark mode, black for light mode
    },
    description: {
      color: isDarkMode ? '#ccc' : '#666', // Subtle grey for descriptions
    },
    favoriteIcon: {
      padding: 5,
    },
    circle: {
      backgroundColor: isDarkMode ? '#3F3F3F' : '#fff', // Matches card background
      borderRadius: 20,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: isDarkMode ? '#555' : '#ccc', // Border matches the mode
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
