import {StyleSheet} from 'react-native';
import theme from '../../themes';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  subContainer: {flex: 1},
  mainView: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  verifyAccountText: {
    marginBottom: 15,
  },
  companyIDText: {marginRight: 35, marginBottom: 15},
  companyIDInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    shadowOffset: {width: responsiveScreenWidth(-2), height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: theme.colors.grey1,
  },
  textInput: {
    flex: 0.25,
    borderBottomColor: 'black',
    borderBottomWidth: responsiveScreenWidth(1),
    marginLeft: 15,
  },
  continueButton: {
    alignSelf: 'center',
  },
  buttons: {borderRadius: 30, width: responsiveScreenWidth(350)},
  linearGradient: {
    marginBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    marginBottom: 25,
  },
});

export default styles;
