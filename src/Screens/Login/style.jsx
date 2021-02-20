import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: "100%"
    },
    fundo: { 
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    },
    titulo: {
        color: "white",
        fontSize: 32
    },
    inputs: {
        width: "100%",
        padding: 8
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        margin: 8,
        padding: 8,
        marginTop: 12,
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "red",
        marginTop: 12,
        padding: 8,
        borderRadius: 4
    },
    texto: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    }
});

export default styles;