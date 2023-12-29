import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MovieScreen =({route, navigation}) =>{
  const {movieId} = route.params
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Movie Screen : {movieId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MovieScreen;