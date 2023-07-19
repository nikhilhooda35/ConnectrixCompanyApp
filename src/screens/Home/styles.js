import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: 150,
    backgroundColor: theme.colors.primary,
  },
  companyIcon: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
    height: 120,
    width: 135,
  },
  linearGradient: {
    marginBottom: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    width: 200,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default styles;
