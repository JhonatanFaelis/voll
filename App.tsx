import { StyleSheet, Text, View } from 'react-native';
import Principal from './src/Pages/Home/Home';
import Home from './src/Pages/Home/Home';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEMES } from './src/styles/theme';
import Login from './src/Pages/Login/Login';


export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar ></StatusBar>
      <Login/>
    </NativeBaseProvider>
  );
}


