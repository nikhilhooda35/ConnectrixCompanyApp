import {StyleSheet} from 'react-native';
import theme from '../../themes';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: responsiveScreenHeight(1),
    paddingBottom: responsiveScreenHeight(3),
    paddingHorizontal: responsiveScreenWidth(2.5),
    backgroundColor: theme.colors.background,
  },
  rowCenter: {flexDirection: 'row', justifyContent: 'space-between'},
  row: {flexDirection: 'row'},

  titleStyle: {
    marginBottom: responsiveScreenHeight(1),
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: theme.fonts.fontBold,
  },
  profileIcon: {
    height: responsiveScreenHeight(4),
    width: responsiveScreenWidth(8),
  },
  surface: {
    flex: 1,
    padding: responsiveScreenWidth(2),
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(90),
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: responsiveScreenHeight(2),
    marginBottom: responsiveScreenHeight(0.1),
    backgroundColor: theme.colors.white,
  },
  textView: {flex: 4.5, flexDirection: 'row', alignItems: 'center'},
  itemText: {
    marginLeft: responsiveScreenWidth(1),
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: theme.fonts.fontMedium,
    color: theme.colors.primary,
  },
  chevronRightIcon: {flex: 0.5},
  fontBold: {
    fontFamily: theme.fonts.fontBold,
    fontSize: responsiveScreenFontSize(1.2),
  },
});

export default styles;
