import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

import Dynamic from './examples/Dynamic'; 
import Overlay from './examples/Overlay';
import Scrollable from './examples/Scrollable';
import Simple from './examples/Simple';

export default class MyScrollableTabView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: 'dynamic',
    };
  }

  navigate = (scene) => {
    this.setState({ scene });
  }

  render() {
    const { scene } = this.state;

    if (scene === 'simple') {
      return (<Simple />);
    } else if (scene === 'scrollable') {
      return (<Scrollable />);
    } else if (scene === 'overlay') {
      return (<Overlay />);
    } else if (scene === 'dynamic') {
      return (<Dynamic />);
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Welcome to the react-native-scrollable-tab-view examples!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.navigate('simple')}
          >
            <Text>Simple example</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.navigate('scrollable')}
          >
            <Text>Scrollable tabs example</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.navigate('overlay')}
          >
            <Text>Overlay example</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.navigate('dynamic')}
          >
            <Text>Dynamic tabs example</Text>
          </TouchableOpacity>
      </View>        
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  button: {
    padding: 10,
  },  
});