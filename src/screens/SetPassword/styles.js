import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  subContainer: {flex: 1},
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    // shadowOpacity: 0.1,
    // shadowRadius: 1,
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
    // elevation: 2,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: theme.colors.grey1,
  },
  iconView: {
    marginRight: 5,
  },
  textInput: {
    flex: 1,
  },
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  passwordText: {
    marginBottom: 5,
  },
  setPasswordText: {
    marginBottom: 20,
  },
});

export default styles;
