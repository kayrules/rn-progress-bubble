/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import ProgressB from './app/components/progress';

const width = Dimensions.get('window').width * 0.9;

export default class PrepaidR1 extends Component {
  render() {
    return (
      <View style={styles.container}>
		<ProgressB
			caption={'LTE Quota'}
			width={width}
			progress={0.8}
			minText={'0GB'}
			maxText={'10.0GB'}
			valText={'8.0GB'}
			/>
		<ProgressB
			caption={'3G & LTE Quota'}
			width={width}
			progress={0.5}
			minText={'0GB'}
			maxText={'10.0GB'}
			valText={'5.0GB'}
			/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PrepaidR1', () => PrepaidR1);
