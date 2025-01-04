import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

export default function RepositoryCard({repository, onPress}) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const styles = getStyles(isDarkMode);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{uri: repository.owner.avatar_url}}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{repository.name}</Text>
        <Text style={styles.description}>{repository.description}</Text>
      </View>
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
      backgroundColor: isDarkMode ? '#333' : '#fff',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    name: {
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000',
    },
    description: {
      color: isDarkMode ? '#ccc' : '#666',
    },
  });
