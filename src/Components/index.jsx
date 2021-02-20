import React from 'react';
import { TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import css from './style';

function CardProduto(props) {
    return (
        <>
            <View style={css.container}>
               <Image style={css.imagem} source={props.prod.imagem} />
                <Text style={css.nomeProduto}>{props.prod.nome_produto}</Text>
                <Text style={css.velho}>R$ {props.prod.preco_original}</Text>
                <Text style={css.novo}>R$ {props.prod.preco}</Text>
                <TouchableOpacity style={css.btn} onPress={() => {
                    Alert.alert("Obrigado por comprar na FSEletro");
                }}>
                    <Text style={css.btnText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default CardProduto;