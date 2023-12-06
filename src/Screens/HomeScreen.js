import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Colors from '../constans/Colors';
import fonts from '../constans/fonts';
import GenreCard from '../components/GenreCard';
import MovieCard from '../components/MovieCard';
import ItemSeparator from '../components/ItemSeparator';



const Genres = ["All", "Action", "Romance", "Horror", "Sci-fi"];

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("All"); 
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDatas = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=61b93257091c63f99ac3b8eca0c97863');

      const json = await response.json();
      setNowPlayingMovies(json.results); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatas();
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
        {/* <Text style={styles.headerSubtitle}>VIEW ALL</Text> */}
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
        data={nowPlayingMovies} // Use nowPlayingMovies instead of Genres
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()} 
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={20} />}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            language={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
          />
        )}
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
