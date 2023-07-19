import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import theme from '../../themes';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../component/Button';
import Typography, {fontFamilies} from '../../themes/typography';
import GenericScreen from '../../utils/GenericScreen';
import {faceId} from '../../assets/images';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Login = ({navigation}) => {
  const [mobileNo, setmobileNo] = useState(null);
  const [password, setpassword] = useState('');

  const onChangeMobile = mobile => {
    setmobileNo(mobile);
  };

  const onChangePassword = pass => {
    setpassword(pass);
  };

  return (
    <GenericScreen hasCompanyLogo customStyle={styles.genericScreen}>
      <KeyboardAvoidingView behavior={'height'} style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <View style={styles.loginView}>
            <Text style={[styles.loginText, Typography.h2]}>Login</Text>
            <Text style={[styles.mobilePassswordText, Typography.h6]}>
              MOBILE NO.
            </Text>
            <View style={styles.mobilePasswordInput}>
              <View style={styles.iconView}>
                <MaterialIcon
                  name="cellphone"
                  size={24}
                  color={theme.colors.grey}
                />
              </View>
              <TextInput
                keyboardType="number-pad"
                style={styles.textInput}
                placeholder="Enter Mobile No."
                onChangeText={onChangeMobile}
                value={mobileNo}
              />
            </View>
            <View style={styles.row}>
              <Text style={[styles.mobilePassswordText, Typography.h6]}>
                PASSWORD
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                <Text style={styles.forgotPasswordText}>Forgot?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mobilePasswordInput}>
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
          </View>
          <View style={styles.loginButton}>
            <Button
              title="Login"
              onPress={() => navigation.navigate('Tab1')}
              customStyle={styles.buttons}
            />
          </View>
          <View style={styles.orText}>
            <Text>OR</Text>
          </View>
          <TouchableOpacity style={styles.faceIdButton}>
            <Image
              source={faceId}
              style={styles.faceIdIcon}
              size={12}
              color={theme.colors.primary}
            />
            <Text style={styles.loginFaceIdText}>Login with Face ID</Text>
          </TouchableOpacity>
          <View style={styles.createNewAccount}>
            <Text>Didn't have an account?</Text>
            <Text
              style={{
                color: theme.colors.primary,
                fontFamily: fontFamilies.fontMedium,
              }}
              onPress={() => navigation.navigate('CreateNewAccount')}>
              Create New Account
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>V 1.1.9 </Text>
          <Text>
            Powered By{' '}
            <Text style={{color: theme.colors.primary}}>UNEECOPS</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </GenericScreen>
  );
};

export default Login;
