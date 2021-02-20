import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Rotas from './src/routes';

function App() {
  return (
    <View>
      <StatusBar />
      <Rotas />
    </View>
  );
}

export default App;