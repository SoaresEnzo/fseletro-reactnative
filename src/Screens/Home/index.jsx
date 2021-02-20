import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import css from './style';
import Logo from '../../../assets/logo.png';

function Home({navigation}){
    return(
        <View style={css.fundo}>
            <View style={css.logo}>
                <Image source={Logo} />
            </View>
            <View>
                <TouchableOpacity style={css.btn} onPress={()=>{navigation.navigate("Login")}}>
                    <Text style={css.btnText}>Fazer Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={css.btn} onPress={()=>{navigation.navigate("Produtos")}}>
                <Text style={css.btnText}>Entrar como visitante</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Home;