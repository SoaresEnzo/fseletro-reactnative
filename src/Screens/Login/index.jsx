import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';

import styles from './style';

function Login({navigation}) {

    function autenticacao(){
        if(login !== "" && senha !== ""){
            navigation.navigate("Produtos");
        } else {
            Alert.alert("Usuário inválido", "Este usuário não existe");
        }
        
    }

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <View style={styles.caixa}>
            <ImageBackground style={styles.fundo}>
                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>
                <View style={styles.inputs}>
                    <TextInput placeholder="Digite o e-mail" style={styles.input} keyboardType="email-address" value={login} onChangeText={(text)=>setLogin(text)}></TextInput>
                    <TextInput placeholder="Digite a senha" style={styles.input} value={senha} onChangeText={(text)=> setSenha(text)} secureTextEntry={true}></TextInput>

                    <TouchableOpacity style={styles.btn}>
                    <Text style={styles.texto} onPress={autenticacao}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Login;
