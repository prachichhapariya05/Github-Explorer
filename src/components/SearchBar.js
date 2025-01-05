import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchBar({query, setQuery, onSearch, onClear}) {
  const [localQuery, setLocalQuery] = useState(query);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const styles = getStyles(isDarkMode);

  const handleClear = () => {
    setLocalQuery('');
    setQuery('');
    onClear(); // Call onClear to reset the repositories
  };

  const handleTextChange = text => {
    setLocalQuery(text);
    setQuery(text);
    if (text) {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Repositories"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
        value={localQuery}
        onChangeText={handleTextChange}
        onSubmitEditing={() => onSearch(localQuery)}
      />

      {localQuery.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearIcon}>
          <Icon name="clear" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const getStyles = isDarkMode =>
  StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: isDarkMode ? '#555' : '#ccc',
      borderRadius: 8,
      padding: 10,
      color: isDarkMode ? '#fff' : '#000',
      backgroundColor: isDarkMode ? '#333' : '#fff',
    },
    clearIcon: {
      position: 'absolute',
      right: 15,
      top: '50%',
      transform: [{translateY: 0}],
    },
  });
