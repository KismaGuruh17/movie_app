import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Colors from '../constans/Colors';
import fonts from '../constans/fonts';
import GenreCard from '../components/GenreCard';
import MovieCard from '../components/MovieCard';
import ItemSeparator from '../components/ItemSeparator';
import { getNowPlayingMovies } from '../services/MovieService';



const Genres = ["All", "Action", "Romance", "Horror", "Sci-fi"];

const HomeScreen =() => {
  const [activeGenre, setActiveGenre] = useState("all");
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  
  useEffect(() => { getNowPlayingMovies().then(movieResponse => 
    setNowPlayingMovies(movieResponse.data))
  }, []);
  

  return (
    <ScrollView style={styles.container}>
      <StatusBar 
      style="auto"  
      translucent={false} 
      backgroundColor={Colors.BASIC_BACKGROUND}
      />
      <View style={styles.container}>
      {/* Konten aplikasi lainnya akan ditempatkan di sini */} 
    </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Movie</Text>
        <Text style={styles.headerSubtitle}>VIEW ALL</Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList 
        data={Genres} 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={20} />}
         renderItem={({item}) => (
         <GenreCard
          genreName={item}
          active={item === activeGenre ? true: false}
          onPress={() => setActiveGenre(item)}
          />
          )}
        />
      </View>
      <View>
      <FlatList
          data={Genres} 
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => <MovieCard data={item} />} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  headerContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:20,
    paddingVertical:10,
  },
  headerTitle:{
    fontSize:28,
    fontFamily: fonts.REGULAR,
    color:Colors.WHITE,
  },
  headerSubtitle:{
    fontSize:13,
    color:Colors.WHITE,
    fontFamily:fonts.BOLD,
  },
  genreListContainer:{
    paddingVertical: 10,

  },
});

export default HomeScreen;
