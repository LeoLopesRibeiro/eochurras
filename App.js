import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Locacao from './src/pages/Locacao';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { StackRoutes } from './routes2';

export default function App() {
return(
    <StackRoutes></StackRoutes>

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
