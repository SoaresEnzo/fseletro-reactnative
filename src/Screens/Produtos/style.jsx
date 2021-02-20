import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
    container:{
        width: "90%",
        backgroundColor: "white",
        borderRadius: 8,
        marginVertical: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 0
    },
    imagem:{
        width: "100%",
        margin: 0,
        padding: 0
    },
    nomeProduto: {
        color: "#000",
        fontSize: 16
    },
    velho: {
        textDecorationLine: "line-through",
        color: "#000",
        fontSize: 12,
        fontWeight: "100",
        textAlign: "center"
    },
    novo: {
        color: "red",
        fontSize: 16,
        textAlign: "center"
    },
    btn: {
        backgroundColor: "#ff5555",
        width: "100%",
        borderRadius: 4,
        padding: 8,
        alignItems: "center"
    },
    btnText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "800"
    }    
});

export default css;