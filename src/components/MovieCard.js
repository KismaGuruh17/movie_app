import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../constans/Colors";
import fonts from "../constans/fonts";
import { Ionicons } from '@expo/vector-icons';
import images from "../constans/images";

const MovieCard =() => {
    const [liked, setLiked] = useState(false)


    return (
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.imdbContainer} >
            <Image
                source={images.IMDB}
                        resizeMode="cover"
                        style={styles.imdbImage}   />
                <Text style={styles.imdbRating}> 9.9</Text>
         </View>
         <TouchableOpacity onPress={() => setLiked(!liked)}>
         <Ionicons
          name={liked ? "heart" : "heart-outline"} 
         size={25} 
         color={liked ? Colors.HEART : Colors.WHITE}
         style={{position:"absolute", bottom:-310, left:0 }} />
         </TouchableOpacity>
        </View>
        <View>
            <Text style={styles.movieTitle} numberOfLines={2} >
             URl - One Piece
              </Text>
            <View style={styles.movieSubtitleContainer} >
                <Text style={styles.movieSubtitle}>JAPAN | (U/A) </Text>
                <View style={styles.rowAndCenter}>
                <Ionicons name="heart"
                 size={17} 
                 color={Colors.HEART}
                 style={{ marginRight:5}}
                 />
                    <Text style={styles.movieSubtitle}> 90%</Text>
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
    }
});

export default MovieCard;