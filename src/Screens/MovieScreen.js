import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MovieScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const apiKey = '61b93257091c63f99ac3b8eca0c97863';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
        }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movieData.title}</Text>
      <Text style={styles.description}>{movieData.overview}</Text>

      <Ionicons
        name="ios-arrow-back"
        size={30}
        color="#000"
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  backIcon: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
});

export default MovieScreen;
