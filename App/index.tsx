import React from 'react';
import { AppRegistry, Platform, View } from 'react-native';

import { name as appName } from '../app.json';
import DraggableSheet from './components/DraggableSheet';
import MainContent from './components/MainContent';
import ExampleComponent from './components/ExampleComponent';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <MainContent />
      <DraggableSheet>
        <ExampleComponent style={{ height: 60, marginBottom: 10 }} />
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <ExampleComponent style={{ flex: 1, height: 120, marginRight: 10 }} />
          <ExampleComponent style={{ flex: 1, height: 120 }} />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <ExampleComponent style={{ flex: 1, height: 120, marginRight: 10 }} />
          <ExampleComponent style={{ flex: 1, height: 120 }} />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <ExampleComponent style={{ flex: 1, height: 120, marginRight: 10 }} />
          <ExampleComponent style={{ flex: 1, height: 120 }} />
        </View>
        <ExampleComponent style={{ height: 60, marginBottom: 10 }} />
        <ExampleComponent style={{ height: 60, marginBottom: 10 }} />
        <ExampleComponent style={{ height: 60, marginBottom: 10 }} />
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <ExampleComponent style={{ flex: 1, height: 120, marginRight: 10 }} />
          <ExampleComponent style={{ flex: 1, height: 120 }} />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <ExampleComponent style={{ flex: 1, height: 120, marginRight: 10 }} />
          <ExampleComponent style={{ flex: 1, height: 120 }} />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <ExampleComponent style={{ flex: 1, height: 120, marginRight: 10 }} />
          <ExampleComponent style={{ flex: 1, height: 120 }} />
        </View>
      </DraggableSheet>
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
