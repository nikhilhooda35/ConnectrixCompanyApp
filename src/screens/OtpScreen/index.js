import React, {useState, useRef} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Typography from '../../themes/typography';
import LinearGradient from 'react-native-linear-gradient';
import GenericScreen from '../../utils/GenericScreen';
import theme from '../../themes';

const OTPScreen = ({navigation}) => {
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

  const handleContinue = () => {
    let myString = parseInt(otpValue.join(''), 10);
    setOtpValue(myString);
    console.log(otpValue);
  };

  return (
    <GenericScreen hasCompanyLogo>
      <View style={styles.subContainer}>
        <View style={styles.mainView}>
          <Text style={[styles.verifyAccountText, Typography.h2]}>
            Enter OTP
          </Text>
          <View style={[styles.companyIDInput, styles.container]}>
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
        <Text style={[styles.companyIDText, Typography.h5]}>
          Didn't receive OTP? Resend
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={theme.colors.buttonGradient}
          style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => {
              handleContinue();
              navigation.navigate('SetPassword');
            }}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </GenericScreen>
  );
};

export default OTPScreen;
