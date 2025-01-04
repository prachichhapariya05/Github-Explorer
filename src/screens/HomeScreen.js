// import React, {useState} from 'react';
// import {
//   View,
//   FlatList,
//   StyleSheet,
//   ActivityIndicator,
//   Text,
// } from 'react-native';
// import {useTheme} from '@react-navigation/native';
// import SearchBar from '../components/SearchBar';
// import RepositoryCard from '../components/RepositoryCard';
// import {fetchRepositories} from '../utils/api';

// export default function HomeScreen({navigation}) {
//   const {colors} = useTheme();
//   const [query, setQuery] = useState('');
//   const [repositories, setRepositories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     setError(null);
//     setHasSearched(true);

//     try {
//       const results = await fetchRepositories(query);
//       console.log('results', results);
//       setRepositories(results);
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderEmptyState = () => {
//     if (!hasSearched) {
//       return null;
//     }
//     return (
//       <View style={styles.emptyStateContainer}>
//         <Text style={[styles.emptyStateText, {color: colors.text}]}>
//           {error || 'No repositories found. Try a different search.'}
//         </Text>
//       </View>
//     );
//   };

//   return (
//     <View style={[styles.container, {backgroundColor: colors.background}]}>
//       <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
//       {loading ? (
//         <ActivityIndicator size="large" color={colors.primary} />
//       ) : (
//         <FlatList
//           data={repositories}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({item}) => (
//             <RepositoryCard
//               repository={item}
//               onPress={() => navigation.navigate('Details', {repository: item})}
//             />
//           )}
//           ListEmptyComponent={renderEmptyState}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   emptyStateContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyStateText: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import RepositoryCard from '../components/RepositoryCard';
import {fetchRepositories} from '../utils/api';

export default function HomeScreen({navigation}) {
  const {colors} = useTheme();
  const [query, setQuery] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const results = await fetchRepositories(query);
      setRepositories(results);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderEmptyState = () => {
    if (!hasSearched) {
      return null;
    }
    return (
      <View style={styles.emptyStateContainer}>
        <Text style={[styles.emptyStateText, {color: colors.text}]}>
          {error || 'No repositories found. Try a different search.'}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.headerText, {color: colors.text}]}>
        GitHub Repository Finder
      </Text>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
      ) : (
        <FlatList
          data={repositories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <RepositoryCard
              repository={item}
              onPress={() => navigation.navigate('Details', {repository: item})}
            />
          )}
          ListEmptyComponent={renderEmptyState}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  loader: {
    marginTop: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    opacity: 0.8,
  },
});
