import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppStackEntry from './config/router';
const App = params => {
  return (
    <View style={styles.mainContainer}>
      <AppStackEntry />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
export default App;
