import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Horor = () => {
    return (
        <View style={Styles.container}>
            <Text>Horor Movie</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Horor;