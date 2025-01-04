import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function DetailsScreen({route}) {
  const {repository} = route.params;
  const {colors} = useTheme(); // Access current theme colors

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Image
        source={{uri: repository.owner.avatar_url}}
        style={styles.avatar}
      />
      <Text style={[styles.name, {color: colors.text}]}>{repository.name}</Text>
      <Text style={[styles.description, {color: colors.text}]}>
        {repository.description}
      </Text>
      <Text style={[styles.info, {color: colors.text}]}>
        Stars: {repository.stargazers_count}
      </Text>
      <Text style={[styles.info, {color: colors.text}]}>
        Forks: {repository.forks_count}
      </Text>
      <Text style={[styles.info, {color: colors.text}]}>
        Language: {repository.language}
      </Text>
      <Text style={[styles.info, {color: colors.text}]}>
        Owner: {repository.owner.login}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  info: {
    fontSize: 14,
    marginVertical: 5,
  },
});
