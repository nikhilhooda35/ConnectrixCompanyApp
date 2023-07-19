/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {companyLogo} from '../../assets/images';

const GenericScreen = ({hasCompanyLogo, customStyle, children}) => {
  return (
    <View style={[styles.mainContainer, customStyle]}>
      {hasCompanyLogo && (
        <Image source={companyLogo} style={styles.companyIcon} />
      )}
      {children}
    </View>
  );
};

export default GenericScreen;
