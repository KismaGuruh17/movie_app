import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
 
const MovieScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movieData, setMovieData] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=61b93257091c63f99ac3b8eca0c97863`);
        const json = await response.json();
        setMovieData(json);
      } catch (error) {
        console.error(error);
      }
    };
 
    fetchData();
  }, [movieId]);
 
  if (!movieData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
 
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movieData.poster_path}` }}
        style={styles.posterImage}
      />
      <View style={styles.contentContainer}> 
        <Text style={styles.title}>{movieData.title}</Text> 
        <Text style={styles.subtitle}>{`Language: ${movieData.original_language}`}</Text> 
        <Text style={styles.subtitle}>{`Release Date: ${movieData.release_date}`}</Text> 
        <Text style={styles.overviewTitle}>Overview:</Text> 
        <Text style={styles.overviewText}>{movieData.overview}</Text> 
        <Text style={styles.voteAverage}>{`Vote Average: ${movieData.vote_average}`}</Text> 
        <Text style={styles.voteCount}>{`Vote Count: ${movieData.vote_count}`}</Text> 
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posterImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 12,
    marginBottom: 8,
  },
  overviewText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  voteAverage: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  voteCount: {
    fontSize: 16,
    color: 'white',
    marginBottom: 12,
  },
});
 
export default MovieScreen;