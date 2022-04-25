import React, { Text, Component } from 'react';

import {WebView} from 'react-native-webview'

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

class SimpleComp extends Component{
    render(){
        return(
            <Text> Hello World</Text>
        )

    }
}

//export MyWeb;
export default SimpleComp;