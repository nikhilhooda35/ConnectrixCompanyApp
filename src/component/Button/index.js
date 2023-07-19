import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import theme from '../../themes';

const Button = ({title, onPress, customStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50, // Adjust this value to make the button more or less round
    backgroundColor: '#2173bd',
    paddingVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(1.5),
    marginBottom: responsiveScreenHeight(1),
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    fontFamily: theme.fonts.fontRegular,
    textAlign: 'center',
  },
});

export default Button;
