import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import rawData from '../../Models/data';
import CardComponent from '../../components/cardComponent/card';
import {getShuffledArr} from '../../util';
import colors from '../../constants/colors';

const GameScreen = params => {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    setData(getShuffledArr(rawData));
  }, []);

  const selected = item => {
    const index = data.findIndex(obj => obj.selected);
    if (index !== -1) {
      //Case Matched
      if (data[index].id === item.id) {
        data[index].matched = true;
        item.matched = true;
        data[index].reveal = true;
      } else {
        // Unmatched Case
        item.reveal = true;
        // Remove the image after 1 second
        setTimeout(() => {
          data.map(resetItem => (resetItem.reveal = false));
          setRefresh(!refresh);
        }, 1000);
      }
      data.map(resetItem => (resetItem.selected = false));
      // Show the score to user
      setCount(count + 1);
    } else {
      item.selected = true;
      item.reveal = true;
      setRefresh(!refresh);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item, index) => index}
        extraData={refresh}
        renderItem={item => <CardComponent data={item} selected={selected} />}
      />
      <Text style={styles.title} onPress={() => console.log(data)}>
        Turns:
      </Text>

      <Text style={{marginLeft: 10}}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
  },
  title: {
    color: colors.blue,
    marginLeft: 10,
    fontSize: 20,
    margin: 10,
  },
});

export default GameScreen;
