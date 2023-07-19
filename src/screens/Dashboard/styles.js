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
  teamButton: {
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(3.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
  },
  teamButtonText: {
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: theme.fonts.fontSemiBold,
    color: theme.colors.primary,
  },
  titleStyle: {
    marginBottom: responsiveScreenHeight(1),
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: theme.fonts.fontBold,
  },
  profileIcon: {
    height: responsiveScreenHeight(3),
    width: responsiveScreenWidth(6),
  },
  overdueComponent: {
    width: responsiveScreenWidth(62),
    height: responsiveScreenHeight(10),
    paddingTop: responsiveScreenHeight(1),
    paddingBottom: responsiveScreenHeight(1.5),
    paddingLeft: responsiveScreenWidth(2.5),
    paddingRight: responsiveScreenWidth(10.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: theme.fonts.fontRegular,
    fontSize: responsiveScreenFontSize(1.8),
    color: theme.colors.black,
  },
  invoices: {
    marginTop: responsiveScreenHeight(0.5),
    fontSize: responsiveScreenFontSize(1.5),
  },
  invoiceMoney: {
    fontFamily: theme.fonts.fontMedium,
    fontSize: responsiveScreenFontSize(1.7),
  },
  outstandingComponent: {
    width: responsiveScreenWidth(31),
    height: responsiveScreenHeight(10),
    paddingTop: responsiveScreenHeight(1.5),
    paddingLeft: responsiveScreenHeight(1.5),
  },
  agingComponent: {
    padding: responsiveScreenWidth(4),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveScreenWidth(1.5),
    margin: responsiveScreenWidth(2),
  },
  bulletPoint: {
    borderRadius: 50,
    height: responsiveScreenHeight(1),
    width: responsiveScreenWidth(2),
    marginRight: responsiveScreenWidth(2),
  },
  daysText: {
    fontFamily: theme.fonts.fontLight,
    fontSize: 13.5,
    paddingTop: 2,
  },
  bulletPointOne: {
    backgroundColor: theme.colors.lightpink,
  },
  bulletPointTwo: {
    backgroundColor: theme.colors.lightBlue,
  },
  bulletPointThree: {
    backgroundColor: theme.colors.lightYellow,
  },
  bulletPointFour: {
    backgroundColor: theme.colors.lightGreen,
  },
  bulletPointtext: {fontWeight: 'bold', marginLeft: responsiveScreenWidth(4)},
  bulletPointtext1: {
    fontWeight: 'bold',
    marginLeft: responsiveScreenWidth(5.7),
  },
  bulletPointtext4: {
    fontWeight: 'bold',
    marginLeft: responsiveScreenWidth(7),
  },
  boldText: {fontWeight: 'bold'},
  pieChart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetVsAchievementContainer: {
    marginBottom: responsiveScreenHeight(2),
  },
  targetTitle: {
    fontFamily: theme.fonts.fontBold,
    fontSize: responsiveScreenFontSize(1.5),
    marginBottom: responsiveScreenHeight(1),
    textTransform: 'uppercase',
  },
  carouselView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: responsiveScreenWidth(2),
    marginBottom: responsiveScreenHeight(4),
    borderRadius: 5,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    shadowColor: theme.colors.grey1,
  },
  thisMonthBox: {paddingTop: 15, paddingLeft: 15, paddingRight: 30},
  actualCollectionText: {
    color: 'green',
    // flexWrap: 'wrap',
  },
  fontBold: {
    fontFamily: theme.fonts.fontBold,
    fontSize: responsiveScreenFontSize(1.2),
  },
});

export default styles;
