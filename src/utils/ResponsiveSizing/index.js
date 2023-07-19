import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-dimensions';

const percentageCalculation = (max, val) => max * (val / 100);

// export const responsiveHeight = h => {
//   const {height} = Dimensions.get('window');
//   return percentageCalculation(height, h);
// };

// export const responsiveWidth = widthPercentageToDP('50%');
// export const responsiveHeight = heightPercentageToDP('30%');

// export const MyComponent = () => {

//   return (
//     <View style={{width: responsiveWidth, height: responsiveHeight}}>
//       {/* Your component's content */}
//     </View>
//   );
// };
