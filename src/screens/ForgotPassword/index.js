import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Typography from '../../themes/typography';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../themes';
import GenericScreen from '../../utils/GenericScreen';

const ForgotPassword = ({navigation}) => {
  const [mobileNo, setMobileNo] = useState('');

  const onChangeMobileNo = pass => {
    setMobileNo(pass);
  };

  return (
    <GenericScreen hasCompanyLogo>
      <View style={styles.subContainer}>
        <Text style={[styles.setPasswordText, Typography.h2]}>
          Forgot Password
        </Text>

        <Text style={[styles.passwordText, Typography.h6]}>Mobile No.</Text>
        <View style={styles.passwordInput}>
          <View style={styles.iconView}>
            <MaterialIcon
              name="cellphone"
              size={24}
              color={theme.colors.grey}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Mobile No."
            onChangeText={onChangeMobileNo}
            value={mobileNo}
          />
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={theme.colors.buttonGradient}
          style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => {
              console.log(mobileNo);
              navigation.navigate('OTPScreen');
            }}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </GenericScreen>
  );
};

export default ForgotPassword;
