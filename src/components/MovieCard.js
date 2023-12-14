import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import Colors from "../constans/Colors";
import fonts from "../constans/fonts";
import { Ionicons } from '@expo/vector-icons';
import images from "../constans/images";


const MovieCard =({title, language, voteAverage, voteCount, poster, heartLess}) => {
    const [liked, setLiked] = useState(false)
    const [voteCountValue, setVoteCountValue] = useState(voteCount);
    
    return (
        <TouchableOpacity>
        <ImageBackground style={styles.container} source={{uri: `https://image.tmdb.org/t/p/w500${poster}`}} >
            <View style={styles.imdbContainer} >
            <Image
                source={images.IMDB}
                        resizeMode="cover"
                        style={styles.imdbImage}  
             />
            <Text style={styles.imdbRating}>{voteAverage}</Text>
         </View>
         {!heartLess ? (
         <TouchableOpacity onPress={() => {
            setLiked(!liked);
            setVoteCountValue(
              liked ? voteCountValue - 1 : voteCountValue + 1
            ); }}
            >
         <Ionicons
          name={liked ? "heart" : "heart-outline"} 
         size={25} 
         color={liked ? Colors.HEART : Colors.WHITE}
         style={{position:"absolute", bottom:-310, left:0 }} />
         </TouchableOpacity>
         ): null}
        </ImageBackground>
        <View>
            <Text style={styles.movieTitle} numberOfLines={2} >
             {title}
              </Text>
            <View style={styles.movieSubtitleContainer} >
                <Text style={styles.movieSubtitle}>{language} | (U/A) </Text>
                <View style={styles.rowAndCenter}>
                <Ionicons name="heart"
                 size={17} 
                 color={Colors.HEART}
                 style={{ marginRight:5}}
                 />
                    <Text style={styles.movieSubtitle}> {voteCount}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.ACTIVE,
        height:340,
        width:230,
        borderRadius:12,
        elevation:5,
        marginVertical:2,
    },
    movieTitle:{
        fontFamily : fonts.EXTRA_BOLD,
        color:Colors.WHITE,
        paddingVertical: 2,
        marginTop:5,
        width : 230,
    },
    movieSubtitleContainer:{
        flexDirection :"row",
        alignItem: "center",
        justifyContent:"space-between",
    },
    movieSubtitle:{
        fontSize:12,
        fontFamily: fonts.REGULAR,
        color:Colors.WHITE,
    },
    rowAndCenter: {
        flexDirection :"row",
        alignItem: "center"
    },
    imdbContainer:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"flex-end",
        backgroundColor: Colors.YELLOW,
        borderBottomLeftRadius:5,
        borderTopRightRadius:12,
        paddingVertical:3,
    },
    imdbImage :{
        height:20,
        width:50,
        borderBottomLeftRadius:5,
    },
    imdbRating: {
        marginRight:5,
        color: Colors.HEART,
        fontFamily: fonts.EXTRA_BOLD,
    },
});
MovieCard.defaultProps = {
    size: 1,
    heartLess: true,
  };

export default MovieCard;