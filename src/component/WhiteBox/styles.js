import {StyleSheet} from 'react-native';
import theme from '../../themes';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {marginTop: responsiveScreenHeight(3)},
  subContainer: {
    padding: responsiveScreenWidth(2),
    backgroundColor: theme.colors.white,
    paddingHorizontal: responsiveScreenWidth(1),
    marginBottom: responsiveScreenHeight(2),
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: theme.colors.grey1,
    shadowOffset: {
      width: responsiveScreenWidth(-2),
      height: responsiveScreenHeight(4),
    },
  },
  title: {
    textTransform: 'uppercase',
  },
});

export default styles;
