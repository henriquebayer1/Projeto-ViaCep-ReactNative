import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './Components/Header';
import { SafeAreaView } from 'react-native-web';
import { ContainerApp } from './styles';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Home } from './src/screens/Home';


export default function App() {
const [fontLoaded, fontError] = useFonts({Roboto_500Medium, Roboto_700Bold})

if (!fontLoaded && !fontError) {

  return null;
  
}

  return (
    <ContainerApp>
      <StatusBar/>
      <Header/>
      <Home
      />
    
    </ContainerApp>
  );
}

