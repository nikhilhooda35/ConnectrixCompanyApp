import React from 'react';
import {TouchableOpacity, ScrollView, Image, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import theme from '../../themes';
import Typography from '../../themes/typography';
import Strings from '../../common/strings';
import {profileIcon} from '../../assets/images';

const listData = [
  {
    id: 1,
    label: 'Add Sales Target Type',
    icon: 'AntDesign',
    iconName: 'carryout',
  },
  {
    id: 2,
    label: 'Account Master List',
    icon: 'AntDesign',
    iconName: 'filetext1',
  },
  {
    id: 3,
    label: 'Financial Year Period',
    icon: 'AntDesign',
    iconName: 'calendar',
  },
  {id: 4, label: 'Add Company Logo', icon: 'AntDesign', iconName: 'picture'},
  {id: 5, label: 'Document Settings', icon: 'AntDesign', iconName: 'setting'},
  {
    id: 6,
    label: 'Default Price List',
    icon: 'AntDesign',
    iconName: 'filetext1',
  },
  {
    id: 7,
    label: 'Item Master Configuration',
    icon: 'AntDesign',
    iconName: 'setting',
  },
  {
    id: 8,
    label: 'BP Series Configuration',
    icon: 'AntDesign',
    iconName: 'setting',
  },
  {id: 9, label: 'Admin', icon: 'AntDesign', iconName: 'user'},
  {
    id: 10,
    label: 'Account Transfer',
    icon: 'AntDesign',
    iconName: 'addusergroup',
  },
  {
    id: 11,
    label: 'Create Mail Template',
    icon: 'AntDesign',
    iconName: 'filetext1',
  },
];

const Settings = ({navigation}) => {
  const icons = key => {
    if (key.icon === 'FontAwesome5') {
      return (
        <FontAwesome
          name={key.iconName}
          size={30}
          color={theme.colors.primary}
        />
      );
    } else {
      return (
        <AntIcon name={key.iconName} size={25} color={theme.colors.primary} />
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.rowCenter}>
          <Text style={[Typography.h2]}>{Strings.settings}</Text>
          <Image source={profileIcon} style={styles.profileIcon} />
        </View>

        {listData.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('CreateNewAccount')}>
              <Surface style={styles.surface} elevation={1}>
                <View style={styles.textView}>
                  {icons(item)}
                  <Text style={styles.itemText}>{item.label}</Text>
                </View>

                <MaterialIcon
                  name="chevron-right"
                  size={30}
                  color={theme.colors.grey}
                  style={styles.chevronRightIcon}
                />
              </Surface>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Settings;
