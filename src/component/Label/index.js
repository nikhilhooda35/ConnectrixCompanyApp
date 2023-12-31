import * as React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles';
import theme from '../../themes';

/** typography types */
export const LabelVariant = Object.entries(theme.typography).reduce(
  (acc, item) => Object.assign(acc, {[item[0]]: item[0]}),
  {},
);

/**
 * Label component using Text from react-native.
 * This serves the purpose to make the use of text consistent throughtout the app
 * @param {String} title title of text
 * @param {Number} size size of text
 * @param {String} type font type of the text ,  can be regular|bold|semiBold,default is regular
 * @param {String} testID date test id
 * @param {Object} style custom style of text
 */
const Label = ({
  title = '',
  style,
  size = 18,
  textColor = theme.colors.grey[200],
  isUpperCase = false,
  isCapitalise = false,
  type,
  variant,
  numberOfLines,
  ...props
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
      style={[
        size && {fontSize: size},
        variant && {...theme.typography[variant]},
        type && {fontFamily: getFontFamily(type)},
        textColor && {color: textColor},
        isUpperCase && styles.upperCase,
        isCapitalise && styles.capitalise,
        style,
      ]}
      {...props}>
      {title || props.children || ''}
    </Text>
  );
};

const getFontFamily = type => {
  switch (type) {
    case 'bold':
      return theme.fonts.fontBold;
    case 'regular':
      return theme.fonts.fontRegular;
    case 'semiBold':
      return theme.fonts.fontSemiBold;
    case 'medium':
      return theme.fonts.fontMedium;
    case 'light':
      return theme.fonts.fontLight;
    default:
      return theme.fonts.fontRegular;
  }
};
Label.propTypes = {
  type: PropTypes.oneOf(['bold', 'regular', 'semiBold', 'medium', 'light']),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.symbol,
  ]),
  size: PropTypes.number,
  numberOfLines: PropTypes.number,
};
export default Label;
