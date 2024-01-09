import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const MovieScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movieData, setMovieData] = useState(null);
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const apiKey = '61b93257091c63f99ac3b8eca0c97863';

        // Fetch movie details
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        const movieData = await movieResponse.json();
        setMovieData(movieData);

        // Fetch cast details
        const castResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        const castData = await castResponse.json();
        setCastData(castData.cast);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieData || castData.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tombolKembali} onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={30} color="#000000" />
      </TouchableOpacity>

      <ScrollView style={styles.scrollContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
          }}
          style={styles.poster}
        />

        <Text style={styles.title}>{movieData.title}</Text>
        <Text style={styles.description}>{movieData.overview}</Text>

        <Text style={styles.title}>Cast:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {castData.map((cast) => (
            <View key={cast.id} style={styles.castContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w200${cast.profile_path}`,
                }}
                style={styles.castImage}
              />
              <Text style={styles.castName}>{cast.name}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  tombolKembali: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 16,
    marginBottom: 16,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
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
  castContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  castImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  castName: {
    textAlign: 'center',
  },
});

export default MovieScreen;
