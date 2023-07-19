import {StyleSheet} from 'react-native';
import theme from '../../themes';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
  },
  row: {flexDirection: 'row'},
  faceIdIcon: {
    height: responsiveScreenHeight(3),
    width: responsiveScreenWidth(6),
    marginRight: responsiveScreenWidth(5),
  },
  subContainer: {flex: 1},
  loginView: {
    marginLeft: responsiveScreenWidth(1),
    marginRight: responsiveScreenWidth(1),
    marginBottom: responsiveScreenHeight(2),
  },
  loginText: {
    marginBottom: responsiveScreenHeight(1.5),
  },
  mobilePassswordText: {
    marginRight: responsiveScreenWidth(7),
    marginBottom: responsiveScreenHeight(1.5),
  },
  forgotPasswordText: {
    color: theme.colors.primary,
  },
  orText: {
    alignSelf: 'center',
    marginBottom: responsiveScreenHeight(1),
  },
  passsword: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    flexDirection: 'row',
    flex: 0.5,
  },
  mobilePasswordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(2),
    borderRadius: 5,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: theme.colors.grey1,
  },
  iconView: {
    marginRight: responsiveScreenWidth(2.5),
  },
  textInput: {
    flex: 1,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginFaceIdText: {
    color: theme.colors.primary,
    fontSize: responsiveScreenFontSize(1.7),
    fontFamily: theme.fonts.fontRegular,
  },
  buttons: {
    borderRadius: 30,
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(5),
  },
  faceIdButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#D5E0F4',
    borderRadius: 5,
    width: responsiveScreenWidth(88),
    height: responsiveScreenHeight(6),
    marginLeft: responsiveScreenWidth(2.3),
    marginBottom: responsiveScreenHeight(2.5),
    borderColor: '#D5E0F4',
    borderWidth: 1,
  },
  createNewAccount: {flexDirection: 'row', justifyContent: 'space-evenly'},
  footer: {
    marginLeft: responsiveScreenWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
