import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import styles from './styles';
import Typography from './src/themes/typography';
import Strings from '../../../common/strings';
import {profileIcon} from '../../../assets/images';

const FinancialYearPeriod = () => {
  return (
    <ScrollView>
      <View>
        <Text>FinancialYearPeriod</Text>
        <View style={styles.rowCenter}>
          <Text style={[Typography.h2]}>{Strings.settings}</Text>
          <Image source={profileIcon} style={styles.profileIcon} />
        </View>
      </View>
    </ScrollView>
  );
};

export default FinancialYearPeriod;
