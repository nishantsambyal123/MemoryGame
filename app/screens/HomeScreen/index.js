import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game')}>
        <Text style={styles.textColor}>Go to Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: colors.blue,
  },
  textColor: {
    color: colors.white,
  },
});
export default HomeScreen;
