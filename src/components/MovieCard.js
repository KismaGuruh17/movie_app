import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Pastikan sudah di-import
 
const MovieCard =({title, language, voteAverage, voteCount, poster, heartLess, onPress, onDelete}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster}` }}
          style={styles.posterImage}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {heartLess && (
            <FontAwesome name="heart-o" size={20} color="red" style={styles.heartIcon} />
          )}
          {onDelete && (
            <Pressable style={styles.deleteButton} onPress={onDelete}>
              <FontAwesome name="trash" size={20} color="white" />
            </Pressable>
          )}
        </View>
      </View>
    </Pressable>
  );
};
 
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  posterImage: {
    width: 120,
    height: 180,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  language: {
    fontSize: 14,
    color: 'white',
  },
});
 
export default MovieCard;