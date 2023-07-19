/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Typography from '../../themes/typography';
import {profileIcon} from '../../assets/images';
import theme from '../../themes';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import WhiteBox from '../../component/WhiteBox';
import {PieChartComponent} from './piechart';
import Strings from '../../common/strings';
import MyCarousel from '../../component/Carousel';
import {ProgressBar} from 'react-native-paper';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import {LineChart} from 'react-native-gifted-charts';

const Dashboard = ({navigation}) => {
  const agingData = [21500, 6000, 7000, 3000];
  const [pieChartData, setPieChartData] = useState([]);

  const calculateChartData = data => {
    const chartData = [];
    const total = data?.reduce((acc, curr) => acc + curr, 0);

    data?.forEach(element => {
      const percent = total !== 0 ? (element / total) * 100 : 0;
      chartData.push(percent);
    });

    setPieChartData(chartData);
  };

  useEffect(() => {
    calculateChartData(agingData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const carouselData = [
    {
      titleQTD: 'QTD',
      titleYTD: 'YTD',
      qtdProgress: 0.1,
      ytdProgress: 0.5,
      annualProgress: 1,
      qtdText: 0,
      ytdText: 173497,
      annualText: 'Annual',
      annualMoney: 12773497,
    },
    {
      titleQTD: 'QTD',
      titleYTD: 'YTD',
      qtdProgress: 0.1,
      ytdProgress: 0.5,
      annualProgress: 1,
      qtdText: 0,
      ytdText: 173497,
      annualText: 'Annual',
      annualMoney: 12773497,
    },
    {
      titleQTD: 'QTD',
      titleYTD: 'YTD',
      qtdProgress: 0.2,
      ytdProgress: 0.5,
      annualProgress: 1,
      qtdText: 0,
      ytdText: 173497,
      annualText: 'Annual',
      annualMoney: 277300000,
    },
    // Add more items as needed
  ];

  const isZero = value => {
    return value > 0;
  };

  const data = [{month: 'Jan'}, {month: 'Feb'}, {month: 'Mar'}, {month: 'Apr'}];
  const lineData = [
    {value: 0},
    {value: 20},
    {value: 18},
    {value: 40},
    {value: 36},
    {value: 60},
    {value: 54},
    {value: 85},
  ];
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.rowCenter}>
          <Text style={[Typography.h2]}>{Strings.Dashboard}</Text>
          <TouchableOpacity style={styles.teamButton}>
            <Text style={styles.teamButtonText}>{Strings.Team}</Text>
            <MaterialIcon
              name="chevron-down"
              size={30}
              color={theme.colors.primary}
              style={{left: 20}}
            />
          </TouchableOpacity>
          <Image source={profileIcon} style={styles.profileIcon} />
        </View>

        <View style={styles.rowCenter}>
          <WhiteBox
            title={Strings.Overdue}
            subContainerStyle={styles.overdueComponent}
            titleStyle={styles.titleStyle}>
            <View>
              <Text style={styles.heading}>{Strings.Original}</Text>
              <Text style={styles.invoices}>37 {Strings.Invoices}</Text>
              <Text style={styles.invoiceMoney}>₹ 11,06,287</Text>
            </View>
            <View>
              <Text style={styles.heading}>{Strings.Collection}</Text>
              <Text style={styles.invoices}>54 {Strings.Invoices}</Text>
              <Text style={styles.invoiceMoney}>₹ 11,06,287</Text>
            </View>
          </WhiteBox>

          <WhiteBox
            title={Strings.Outstanding}
            subContainerStyle={styles.outstandingComponent}
            titleStyle={styles.titleStyle}>
            <View>
              <Text style={styles.invoices}>37 {Strings.Invoices}</Text>
              <Text style={styles.invoiceMoney}>₹ 11,06,287</Text>
            </View>
          </WhiteBox>
        </View>

        <WhiteBox
          title={Strings.Aging}
          subContainerStyle={styles.agingComponent}
          titleStyle={styles.titleStyle}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1.7}}>
              <View style={styles.bulletItem}>
                <View style={[styles.bulletPoint, styles.bulletPointOne]} />
                <View style={styles.row}>
                  <Text style={styles.daysText}>0-30 {Strings.Days}</Text>
                  <Text style={styles.bulletPointtext1}>
                    ₹ {agingData[0].toLocaleString('en-US')}
                  </Text>
                </View>
              </View>
              <View style={styles.bulletItem}>
                <View style={[styles.bulletPoint, styles.bulletPointTwo]} />
                <View style={styles.row}>
                  <Text style={styles.daysText}>31-60 {Strings.Days}</Text>
                  <Text style={styles.bulletPointtext}>
                    ₹ {agingData[1].toLocaleString('en-US')}
                  </Text>
                </View>
              </View>
              <View style={styles.bulletItem}>
                <View style={[styles.bulletPoint, styles.bulletPointThree]} />
                <View style={styles.row}>
                  <Text style={styles.daysText}>61-90 {Strings.Days}</Text>
                  <Text style={styles.bulletPointtext}>
                    ₹ {agingData[2].toLocaleString('en-US')}
                  </Text>
                </View>
              </View>
              <View style={styles.bulletItem}>
                <View style={[styles.bulletPoint, styles.bulletPointFour]} />
                <View style={styles.row}>
                  <Text style={styles.daysText}>90+ {Strings.Days}</Text>
                  <Text style={styles.bulletPointtext4}>
                    ₹ {agingData[3].toLocaleString('en-US')}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.pieChart}>
              {pieChartData.length > 0 ? (
                <PieChartComponent chartData={pieChartData} />
              ) : null}
            </View>
          </View>
        </WhiteBox>
        <View style={styles.targetVsAchievementContainer}>
          <Text style={styles.targetTitle}>{Strings.TargetVsAchievement}</Text>
          <View style={styles.carouselView}>
            <MyCarousel entries={carouselData} />
          </View>
        </View>
        <View>
          <Text style={styles.targetTitle}>{Strings.thisMonth}</Text>
          <View style={[styles.whiteBox, styles.thisMonthBox]}>
            <View
              // style={{backgroundColor: 'red'}}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.actualCollectionText, styles.fontBold]}>
                Actual{'\n'}Collection
              </Text>
              <Text
                style={[styles.fontBold, {color: 'blue', fontWeight: 'bold'}]}>
                INITIAL{'\n'}PROJECTION
              </Text>
              <Text style={[styles.fontBold, {fontWeight: 'bold'}]}>
                CURRENT{'\n'}PROJECTION
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'green'}}>0 Invoices</Text>
              <Text style={{color: 'blue', marginRight: 18}}>7 Invoices</Text>
              <Text>6 Invoices</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'green'}}>₹ 0</Text>
              <Text style={{color: 'blue'}}>₹ 54,679</Text>
              <View>
                <Text>₹ 52,559</Text>
                <Text>₹ 94,560</Text>
              </View>
            </View>
            <View style={{marginTop: 25}}>
              <ProgressBar
                progress={0.1}
                width={300}
                height={10}
                color="green"
                visible={isZero(1)}
                style={styles.progressbar}
              />
              <ProgressBar
                progress={0.9}
                width={300}
                height={10}
                color="blue"
                style={styles.progressbar}
              />
              <ProgressBar
                progress={0.8}
                width={300}
                height={20}
                color={theme.colors.grey}
                style={styles.progressbar}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.targetTitle}>{Strings.history}</Text>
          <View style={[styles.whiteBox, styles.thisMonthBox]}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text
                style={[
                  {
                    fontFamily: theme.fonts.fontLight,
                    fontSize: responsiveScreenFontSize(1),
                    marginRight: 15,
                  },
                ]}>
                Collection Amount
              </Text>
              <Text
                style={[
                  {
                    fontFamily: theme.fonts.fontLight,
                    fontSize: responsiveScreenFontSize(1),
                  },
                ]}>
                --- Projection Amount
              </Text>
            </View>
            <LineChart
              data={lineData}
              xAxisLabels={data.map(item => item.month)}
              yaxisLabels={false}
              style={{flex: 1}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
