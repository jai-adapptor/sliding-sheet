import React from 'react';
import { AppRegistry, Platform, Text, View } from 'react-native';

import { name as appName } from '../app.json';

function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello world</Text>
    </View>
  );
}

if (Platform.OS === 'android') {
  AppRegistry.registerComponent(appName, () => App);
}

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root');
  AppRegistry.runApplication(appName, { rootTag });
}

export default App;
