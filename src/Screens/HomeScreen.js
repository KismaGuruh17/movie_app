import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Colors from '../constans/Colors';
import fonts from '../constans/fonts';
import GenreCard from '../components/GenreCard';
import MovieCard from '../components/MovieCard';
import ItemSeparator from '../components/ItemSeparator';
//import { getNowPlayingMovies, getUpcomingMovies, getAllGenres, } from '../services/MovieService';

const Genres = ["All", "Action", "Romance", "Horror", "Sci-fi"];

const HomeScreen = ({ navigation }) => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDatas = async () => {
    try {
      // Simulate a loading delay of 10 seconds
      setTimeout(async () => {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=61b93257091c63f99ac3b8eca0c97863'
        );
        const json = await response.json();
        setNowPlayingMovies(json.results);
        setUpcomingMovies(json.results);
        setLoading(false); // Set loading to false after data fetching is complete
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false even if an error occurs
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
          renderItem={({ item }) => (
            <GenreCard
              genreName={item}
              active={item === activeGenre ? true : false}
              onPress={() => setActiveGenre(item)}
            />
          )}
        />
      </View>
      {isLoading ? (
        <Text style={{ color: Colors.WHITE, fontSize: 18, alignSelf: 'center', marginTop: 20 }}>
          Loading...
        </Text>
      ) : (
        <View>
          {/* Now Playing Movies */}
          <FlatList
            data={nowPlayingMovies}
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
                heartLess={false}
                onPress={() => navigation.navigate("movie", { movieId: item.id })}
              />
            )}
          />

          {/* Coming Soon Movies */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Coming Soon</Text>
            <Text style={styles.headerSubTitle}>VIEW ALL</Text>
          </View>
          <FlatList
            data={upcomingMovies}
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
                size={0.7}
                onPress={() => navigation.navigate("movie", { movieId: item.id })}
              />
            )}
          />
        </View>
      )}
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
