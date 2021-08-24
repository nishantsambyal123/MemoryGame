import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import {pattern} from '../../assets/images';

const CardComponent = props => {
  const {
    data: {item: item},
    selected,
  } = props;
  const [reveal, setReveal] = useState(false);

  const onImageClick = obj => {
    selected(obj);
    setReveal(true);
  };

  return (
    <View style={styles.mainComponent}>
      <TouchableOpacity
        onPress={() => onImageClick(item)}
        disabled={item.reveal}>
        {!item.matched && (
          <View style={styles.imageContainer}>
            <Image
              style={styles.tinyLogo}
              source={item.reveal === true ? item.image : pattern}
            />
            {/* <Text>{item.name}</Text> */}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    margin: 13,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
  },
});

export default CardComponent;
