import Colors from './colors';

export const fontFamilies = {
  fontRegular: 'm_lato_regular',
  fontBold: 'm_lato_bold',
  fontLight: 'latoLight',
  fontSemiBold: 'm_lato_semi_bold',
  fontMedium: 'lato_medium',
  fontBlack: 'm_lato_black',
};

const additionalProps = {
  lineHeight: 20,
  letterSpacing: 0,
};

const Typography = {
  h1: {
    fontSize: 12,
    fontFamily: fontFamilies.fontRegular,
    color: Colors.black,
    ...additionalProps,
  },
  h2: {
    fontSize: 22.7,
    fontFamily: fontFamilies.fontLight,
    color: Colors.grey,
    ...additionalProps,
    lineHeight: 29.3,
    letterSpacing: -0.23,
  },
  h3: {
    fontSize: 18.7,
    fontFamily: fontFamilies.fontSemiBold,
    color: Colors.black,
    ...additionalProps,
  },
  h4: {
    fontSize: 14,
    fontFamily: fontFamilies.fontRegular,
    color: Colors.black,
    ...additionalProps,
  },
  h5: {
    fontSize: 12.7,
    fontFamily: fontFamilies.fontRegular,
    color: Colors.primary,
    ...additionalProps,
  },
  h6: {
    fontSize: 12.7,
    fontFamily: fontFamilies.fontRegular,
    color: Colors.black,
    ...additionalProps,
  },
};

export default Typography;
