import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Typography from '../../themes/typography';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../themes';
import GenericScreen from '../../utils/GenericScreen';

const SetPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const onChangePassword = pass => {
    setPassword(pass);
  };

  const onChangeConfirmPassword = pass => {
    setConfirmPassword(pass);
  };

  return (
    <GenericScreen hasCompanyLogo>
      <View style={styles.subContainer}>
        <Text style={[styles.setPasswordText, Typography.h2]}>
          Set Password
        </Text>

        <Text style={[styles.passwordText, Typography.h6]}>Password</Text>
        <View style={styles.passwordInput}>
          <View style={styles.iconView}>
            <MaterialIcon
              name="lock-open-outline"
              size={24}
              color={theme.colors.grey}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            onChangeText={onChangePassword}
            value={password}
          />
        </View>
        <Text style={[styles.passwordText, Typography.h6]}>
          Confirm Password
        </Text>
        <View style={styles.passwordInput}>
          <View style={styles.iconView}>
            <MaterialIcon
              name="lock-open-outline"
              size={24}
              color={theme.colors.grey}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            onChangeText={onChangeConfirmPassword}
            value={confirmpassword}
          />
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={theme.colors.buttonGradient}
          style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => {
              console.log(password);
              navigation.navigate('Login');
            }}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </GenericScreen>
  );
};

export default SetPassword;
