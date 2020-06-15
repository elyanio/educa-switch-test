import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { RepoList } from '../container/RepoList';
import RepoSearch from '../container/RepoSearch';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>search repositories</Text>
      <Text style={styles.line} />
      <RepoSearch />
      <RepoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#f75286',
    marginTop: '1%',
    marginBottom: '1%',
    marginLeft: '1%',
  },
  line: {
    marginLeft: '1%',
    borderBottomColor: '#f75286',
    borderBottomWidth: 1.5,
    maxWidth: '97%'
  },
});
