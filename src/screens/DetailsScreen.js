import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DetailsScreen({route}) {
  const {repository} = route.params;
  const {colors} = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: colors.background},
      ]}>
      <Image
        source={{uri: repository.owner.avatar_url}}
        style={styles.avatar}
      />
      <Text style={[styles.name, {color: colors.text}]}>{repository.name}</Text>
      <Text style={[styles.description, {color: colors.text}]}>
        {repository.description || 'No description available'}
      </Text>

      <View style={styles.infoContainer}>
        <View style={[styles.infoCard, {backgroundColor: colors.card}]}>
          <Icon name="star" size={35} color={colors.primary} />
          <Text style={[styles.infoTitle, {color: colors.text}]}>Stars</Text>
          <Text style={[styles.infoValue, {color: colors.primary}]}>
            {repository.stargazers_count}
          </Text>
        </View>

        <View style={[styles.infoCard, {backgroundColor: colors.card}]}>
          <Icon name="fork-left" size={35} color={colors.primary} />
          <Text style={[styles.infoTitle, {color: colors.text}]}>Forks</Text>
          <Text style={[styles.infoValue, {color: colors.primary}]}>
            {repository.forks_count}
          </Text>
        </View>

        <View style={[styles.infoCard, {backgroundColor: colors.card}]}>
          <Icon name="code" size={35} color={colors.primary} />
          <Text style={[styles.infoTitle, {color: colors.text}]}>Language</Text>
          <Text style={[styles.infoValue, {color: colors.primary}]}>
            {repository.language || 'N/A'}
          </Text>
        </View>

        <View style={[styles.infoCard, {backgroundColor: colors.card}]}>
          <Icon name="account-circle" size={35} color={colors.primary} />
          <Text style={[styles.infoTitle, {color: colors.text}]}>Owner</Text>
          <Text style={[styles.infoValue, {color: colors.primary}]}>
            {repository.owner.login}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ccc',
    marginTop: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 1,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontStyle: 'italic',
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  infoCard: {
    width: 160,
    height: 150,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
