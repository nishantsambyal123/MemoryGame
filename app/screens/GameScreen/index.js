import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import rawData from '../../Models/data';
import CardComponent from '../../components/cardComponent/card';
import {getShuffledArr} from '../../util';

const GameScreen = params => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(getShuffledArr(rawData));
  }, []);

  const selected = item => {
    item.setSelected = true;
    const index = data.findIndex(obj => obj.selected === item.id);
    if (index !== -1) {
      console.log('ek hi ahin');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text onPress={() => console.log(data)}>Hello from Game Screen</Text>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item, index) => index}
        renderItem={item => <CardComponent data={item} selected={selected} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default GameScreen;
