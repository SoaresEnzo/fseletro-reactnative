import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Produtos from '../Screens/Produtos';

const Rotas = {
    Produtos: {
        nome: "Produtos",
        screen: Produtos
    },
    Home: {
        nome: "Home",
        screen: Home
    },
    Login: {
        nome: "Login",
        screen: Login
    }
}

const Navegacao = createSwitchNavigator(Rotas, {initialRouteName: "Home"});

export default createAppContainer(Navegacao);