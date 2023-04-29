import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export default function Video({ urlVideo, handleClose }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleClose}>
                <Feather name="arrow-left" size={24} color="#fff" />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>
            <WebView
                style={styles.youtube}
                source={{ uri: urlVideo }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"

    },
    backButton: {
        flexDirection: "row",
        backgroundColor: "#4cbe6c",
        alignItems: "center",
        paddingLeft: 14,
        height: 48,
        gap: 14,
    },
    backText: {
        color: "#fff",
        fontSize: 18
    },
    youtube: {
        flex: 1
    }
})