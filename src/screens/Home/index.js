/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {companyLogo} from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../themes';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={companyLogo} style={styles.companyIcon} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={theme.colors.buttonGradient}
        style={styles.linearGradient}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
