
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { THEMES } from "../../styles/theme";


export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <Text>
                    Hello World
                </Text>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});