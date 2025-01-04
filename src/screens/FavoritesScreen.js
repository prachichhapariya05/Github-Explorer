import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import RepositoryCard from '../components/RepositoryCard';

export default function FavoritesScreen({navigation}) {
  const favorites = useSelector(state => state.favorites.favorites);
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {favorites.length === 0 ? (
        <Text style={[styles.emptyText, {color: colors.text}]}>
          No favorites added yet!
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <RepositoryCard
              repository={item}
              onPress={() => navigation.navigate('Details', {repository: item})}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
