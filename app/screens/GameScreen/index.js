import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import rawData from '../../Models/data';
import CardComponent from '../../components/cardComponent/card';
import {getShuffledArr} from '../../util';

const GameScreen = params => {
  const [data, setData] = useState();
  const [count, setCount] = useState(1);

  useEffect(() => {
    setData(getShuffledArr(rawData));
  }, []);

  const selected = item => {
    const index = data.findIndex(obj => obj.selected);
    if (index !== -1) {
      if (data[index].id === item.id) {
        data[index].matched = true;
        item.matched = true;
        console.log('Matched');
      } else {
        console.log('Not Matched');
        setTimeout(() => {

        }, 2000);
      }
      data.map(resetItem => (resetItem.selected = false));
      setCount(count + 1);
      console.log('count ', count);
    } else {
      item.selected = true;
      item.reveal = true;
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
