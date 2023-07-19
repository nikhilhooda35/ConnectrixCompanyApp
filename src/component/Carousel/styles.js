import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import theme from '../../themes';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: responsiveScreenWidth(1),
    marginHorizontal: responsiveScreenWidth(1),
  },
  title: {
    fontSize: responsiveScreenFontSize(1.8),
    fontWeight: 'bold',
    color: 'white',
  },
  paginationContainer: {
    paddingVertical: responsiveScreenHeight(1),
  },
  paginationDot: {
    width: responsiveScreenWidth(3),
    height: responsiveScreenHeight(1.5),
    borderRadius: 15,
    marginHorizontal: responsiveScreenWidth(0),
    backgroundColor: 'blue',
  },
  paginationInactiveDot: {
    width: responsiveScreenWidth(3),
    height: responsiveScreenHeight(1.5),
    borderRadius: 15,
    backgroundColor: 'lightgray',
  },
  carouselContainer: {flex: 1},
  targetVsAchievementContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: responsiveScreenWidth(2),
    marginBottom: responsiveScreenHeight(2),
    borderRadius: 5,
    shadowOffset: {
      width: responsiveScreenWidth(-2),
      height: responsiveScreenHeight(4),
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: theme.colors.grey1,
  },
  targetVsAchievementheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.lightGrey,
    marginBottom: responsiveScreenHeight(1),
    paddingBottom: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenHeight(1.5),
  },
  targetActualSubheader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  blueBox: {
    backgroundColor: theme.colors.lightBlue,
    height: responsiveScreenHeight(1),
    width: responsiveScreenWidth(2),
    marginRight: responsiveScreenWidth(1),
  },
  pinkBox: {
    backgroundColor: theme.colors.lightpink,
    height: responsiveScreenHeight(1),
    width: responsiveScreenWidth(2),
    marginLeft: responsiveScreenWidth(5),
    marginRight: responsiveScreenWidth(1),
  },
  greenbox: {
    backgroundColor: theme.colors.lightGreen,
    height: responsiveScreenHeight(1),
    width: responsiveScreenWidth(2),
    marginRight: responsiveScreenWidth(1),
  },
  itemTitle: {
    flex: 1,
    borderBottomWidth: 0.5,
    paddingVertical: responsiveScreenHeight(1),
    borderColor: theme.colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginRight: responsiveScreenWidth(2.5),
    fontFamily: theme.fonts.fontLight,
    fontSize: responsiveScreenFontSize(1.7),
  },
  progressView: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  progressbar: {marginTop: responsiveScreenHeight(1)},
  itemText: {
    flex: 1,
    flexDirection: 'column',
  },
  moneyText: {textAlign: 'right', fontSize: responsiveScreenFontSize(1.3)},
  moneyTextBlue: {color: theme.colors.primary},
  annualView: {
    flex: 1,
    paddingTop: responsiveScreenHeight(1),
    paddingBottom: responsiveScreenHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  annualText: {
    fontFamily: theme.fonts.fontLight,
    fontSize: responsiveScreenFontSize(1.7),
    marginRight: responsiveScreenWidth(4.2),
  },
  annualMoneyText: {flex: 1},
});

export default styles;
