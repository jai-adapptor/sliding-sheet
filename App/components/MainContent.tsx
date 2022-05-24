import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const MainContent = () => {
  return (
    <View style={styles.container}>
      <Text>MainContent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F59CFF',
  },
});

export default MainContent;
