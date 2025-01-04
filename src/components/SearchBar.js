import React from 'react';
import {TextInput, StyleSheet, View, useColorScheme} from 'react-native';

export default function SearchBar({query, setQuery, onSearch}) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Repositories"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={onSearch}
      />
    </View>
  );
}

const getStyles = isDarkMode =>
  StyleSheet.create({
    container: {
      padding: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: isDarkMode ? '#555' : '#ccc',
      borderRadius: 8,
      padding: 10,
      color: isDarkMode ? '#fff' : '#000',
    },
  });
