import React, {useState, useRef} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Typography from '../../themes/typography';
import LinearGradient from 'react-native-linear-gradient';
import GenericScreen from '../../utils/GenericScreen';
import theme from '../../themes';

const CreateNewAccount = ({navigation}) => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const [otpValue, setOtpValue] = useState(['', '', '', '']);

  const handleInput = (input, index, nextRef, prevRef) => {
    const newOtpValue = [...otpValue];
    newOtpValue[index] = input;

    if (input.length === 1 && nextRef && nextRef.current) {
      nextRef.current.focus();
    } else if (input.length === 0 && prevRef && prevRef.current) {
      prevRef.current.focus();
    }

    setOtpValue(newOtpValue);
  };

  return (
    <GenericScreen hasCompanyLogo>
      <View style={styles.subContainer}>
        <View style={styles.mainView}>
          <Text style={[styles.verifyAccountText, Typography.h2]}>
            Verify Account
          </Text>
          <Text style={[styles.companyIDText, Typography.h5]}>COMPANY ID</Text>
          <View style={styles.companyIDInput}>
            <TextInput
              ref={input1Ref}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => handleInput(text, 0, input2Ref, null)}
              value={otpValue[0]}
            />
            <TextInput
              ref={input2Ref}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => handleInput(text, 1, input3Ref, input1Ref)}
              value={otpValue[1]}
            />
            <TextInput
              ref={input3Ref}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => handleInput(text, 2, input4Ref, input2Ref)}
              value={otpValue[2]}
            />
            <TextInput
              ref={input4Ref}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => handleInput(text, 3, null, input3Ref)}
              value={otpValue[3]}
            />
          </View>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={theme.colors.buttonGradient}
          style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => {
              let myString = otpValue.join('');
              console.log('m', parseInt(myString, 10));

              console.log(otpValue);
              navigation.navigate('OTPScreen');
            }}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#000', '#3b5998', '#322b7c']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </LinearGradient> */}
      </View>
    </GenericScreen>
  );
};

export default CreateNewAccount;
