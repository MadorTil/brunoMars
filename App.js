
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';

const pdfFile = "https://firebasestorage.googleapis.com/v0/b/tilquiz-90d16.appspot.com/o/Alergy%2F%D7%A2%D7%A7%D7%99%D7%A6%D7%95%D7%AA%20%D7%93%D7%91%D7%95%D7%A8%D7%99%D7%9D.pdf?alt=media&token=44fe60d4-9480-4041-a5d5-3a2e83ab3a9a";
const youtubeChannel = "https://www.youtube.com/watch?v=yiZZeK-y6cI&ab_channel=CodePalace"
const URL = "https://www.google.com/";

//import Pdf from 'react-native-pdf';

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style= "auto"/>
      
      <View style={{width: '100%', height:'100%'}}>
        
        <iframe src="http://www.youtube.com/embed/SR6iYWJxHqs" style={{width: '99%', height: '40%'}}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
