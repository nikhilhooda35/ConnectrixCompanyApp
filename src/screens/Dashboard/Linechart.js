import React from 'react';
import {View} from 'react-native';
import {LineChart, Grid} from 'react-native-svg-charts';
import {Circle, G, Line} from 'react-native-svg';

const data = [
  {month: 'Jan', collectionAmount: 500, projectionAmount: 400},
  {month: 'Feb', collectionAmount: 800, projectionAmount: 600},
  {month: 'Mar', collectionAmount: 1000, projectionAmount: 800},
  // Add more data points for each month
];

const CollectionAmountLine = ({lineData, x, y}) => (
  <Line
    key="collectionAmount"
    x1={x(lineData[0])}
    y1={y(lineData[1])}
    x2={x(lineData[2])}
    y2={y(lineData[3])}
    stroke="#297AB1"
    strokeWidth={2}
    fill="none"
  />
);

const ProjectionAmountLine = ({lineData, x, y}) => (
  <G>
    <Line
      key="projectionAmount"
      x1={x(lineData[0])}
      y1={y(lineData[1])}
      x2={x(lineData[2])}
      y2={y(lineData[3])}
      stroke="rgba(410, 122, 177, 0.5)"
      strokeWidth={2}
      strokeDasharray={[5, 5]}
      // fill="none"
    />
    {/* {lineData.map((value, index) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        fill="rgba(41, 122, 177, 0.5)"
      />
    ))} */}
  </G>
);

const LineChartExample = () => {
  const collectionData = data.map(item => item.collectionAmount);
  const projectionData = data.map(item => item.projectionAmount);

  const lineData = [...collectionData, ...projectionData];

  return (
    <View style={{flex: 1}}>
      <LineChart
        style={{flex: 1}}
        data={lineData}
        svg={{stroke: 'rgba(0, 0, 0, 0)'}}
        contentInset={{top: 20, bottom: 20}}>
        <Grid />
        <CollectionAmountLine />
        <ProjectionAmountLine />
      </LineChart>
    </View>
  );
};

export default LineChartExample;
