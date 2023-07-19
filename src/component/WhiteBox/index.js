import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const WhiteBox = ({
  children,
  title,
  mainContainerStyle,
  subContainerStyle,
  titleStyle,
}) => {
  return (
    <View style={[styles.mainContainer, mainContainerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={[styles.subContainer, subContainerStyle]}>{children}</View>
    </View>
  );
};

export default WhiteBox;
