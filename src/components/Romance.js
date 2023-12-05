import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Romance = () => {
    return (
        <View style={Styles.container}>
            <Text>Romance Movie</Text>
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

export default Romance;