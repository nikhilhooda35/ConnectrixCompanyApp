import React from 'react';
import {View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import theme from '../../themes';
export const PieChartComponent = (Data, customStyle) => {
  const widthAndHeight = 100;
  const sliceColor = [
    theme.colors.lightpink,
    theme.colors.lightBlue,
    theme.colors.lightYellow,
    theme.colors.lightGreen,
  ];

  return (
    <View style={customStyle}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={Data.chartData}
        sliceColor={sliceColor}
        coverRadius={0.3}
        coverFill={'#FFF'}
      />
    </View>
  );
};
