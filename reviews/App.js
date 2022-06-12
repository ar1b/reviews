import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{ useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Home from './screens/home';
import About from './screens/about';
import Reviewdeets from './screens/reviewdeets';
import Navigator from './routes/homestack';

const getFonts = () => {
  return Font.loadAsync({
    'onest-regular': require('./assets/fonts/OnestThin1602-hint.ttf'),
    'onest-bold': require('./assets/fonts/OnestBold1602-hint.ttf'),
    'onest-black' : require('./assets/fonts/OnestBlack1602-hint.ttf')
  })
}


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded) {
    return(
      <View style={styles.container}>
        {Navigator()}
      </View>
    );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={()=> console.log('error')}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})