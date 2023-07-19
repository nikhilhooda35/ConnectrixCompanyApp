/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import theme from '../../themes';
import {ProgressBar} from 'react-native-paper';
import Strings from '../../common/strings';
import styles from './styles';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const MyCarousel = ({entries}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const carouselItem = ({item, index}) => {
    return (
      <View style={styles.carouselContainer}>
        <View style={styles.targetVsAchievementContainer}>
          <View style={styles.targetVsAchievementheader}>
            <View style={{flex: 1.2}}>
              <Text
                style={{
                  fontFamily: theme.fonts.fontSemiBold,
                  fontSize: responsiveScreenFontSize(1.7),
                }}>
                {Strings.Overall}
              </Text>
            </View>
            <View style={styles.targetActualSubheader}>
              <View style={styles.blueBox} />
              <Text
                style={{
                  fontFamily: theme.fonts.fontLight,
                  fontSize: responsiveScreenFontSize(1.2),
                }}>
                {Strings.Target}
              </Text>
              <View style={styles.pinkBox} />
              <View style={styles.greenbox} />
              <Text
                style={{
                  fontFamily: theme.fonts.fontLight,
                  fontSize: responsiveScreenFontSize(1.2),
                }}>
                {Strings.Actual}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.itemTitle}>
              <Text style={styles.titleText}>{item.titleQTD}</Text>
              <View style={styles.progressView}>
                <ProgressBar
                  progress={item.qtdProgress}
                  width={200}
                  height={20}
                  color="red"
                  style={styles.progressbar}
                />
                <ProgressBar
                  progress={item.ytdProgress}
                  width={200}
                  height={20}
                  color={theme.colors.primary}
                  style={styles.progressbar}
                />
              </View>
              <View style={styles.itemText}>
                <Text style={styles.moneyText}>
                  ₹ {item.qtdText.toLocaleString('hi-IN')}
                </Text>
                <Text style={[styles.moneyText, styles.moneyTextBlue]}>
                  ₹ {item.ytdText.toLocaleString('en-US')}
                </Text>
              </View>
            </View>
            <View style={styles.itemTitle}>
              <Text style={styles.titleText}>{item.titleYTD}</Text>
              <View style={styles.progressView}>
                <ProgressBar
                  progress={item.ytdProgress}
                  width={200}
                  height={20}
                  color="red"
                  style={styles.progressbar}
                />
                <ProgressBar
                  progress={item.ytdProgress}
                  width={200}
                  height={20}
                  color={theme.colors.primary}
                  style={styles.progressbar}
                />
              </View>
              <View style={styles.itemText}>
                <Text style={styles.moneyText}>
                  ₹ {item.qtdText.toLocaleString('en-US')}
                </Text>
                <Text style={[styles.moneyText, styles.moneyTextBlue]}>
                  ₹ {item.ytdText.toLocaleString('en-US')}
                </Text>
              </View>
            </View>
            <View style={styles.annualView}>
              <Text style={styles.annualText}>{item.annualText}</Text>
              <ProgressBar
                progress={item.annualProgress}
                width={200}
                height={20}
                color={theme.colors.primary}
                style={styles.progressbar}
              />
              <View style={styles.annualMoneyText}>
                <Text style={[styles.moneyText, styles.moneyTextBlue]}>
                  ₹ {item.annualMoney.toLocaleString('en-US')}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  // Get the width of the screen or container
  const {width: screenWidth} = Dimensions.get('window');

  // Define the slider width based on your requirements
  const sliderWidth = screenWidth - 20; // Example: Subtract 20 for padding

  return (
    <View style={{flex: 1}}>
      <Carousel
        data={entries}
        renderItem={carouselItem}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        onSnapToItem={index => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    </View>
  );
};

export default MyCarousel;
