import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon, {Icons} from '../../component/Icons';
import Dashboard from '../Dashboard';
import OTPScreen from '../OtpScreen';
import {Image} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import theme from '../../themes';
import {Text} from 'react-native';
import Settings from '../Settings';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Dashboard,
  },
  {
    route: 'Customers',
    label: 'Customers',
    type: Icons.Ionicons,
    activeIcon: 'people',
    inActiveIcon: 'people-outline',
    component: Dashboard,
  },
  {
    route: 'Sales',
    label: 'Sales',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'sale',
    inActiveIcon: 'sale',
    component: OTPScreen,
  },
  {
    route: 'OrderJourney',
    label: 'OrderJourney',
    type: Icons.Ionicons,
    activeIcon: 'chatbox',
    inActiveIcon: 'chatbox-outline',
    component: Dashboard,
  },
  {
    route: 'Settings',
    label: 'Settings',
    type: Icons.Ionicons,
    activeIcon: 'settings-sharp',
    inActiveIcon: 'settings-outline',
    component: Settings,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    }
    // else {
    //   viewRef.current.animate({
    //     0: {scale: 1.5, rotate: '360deg'},
    //     1: {scale: 1, rotate: '0deg'},
    //   });
    // }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        {item.imageSource ? (
          <Image
            source={item.imageSource}
            style={{
              height: responsiveScreenHeight(3),
              width: responsiveScreenWidth(6),
              marginRight: responsiveScreenWidth(5),
            }}
          />
        ) : (
          <Icon
            type={item.type}
            name={focused ? item.activeIcon : item.inActiveIcon}
            color={focused ? theme.colors.primary : theme.colors.grey}
            size={20}
          />
        )}
      </Animatable.View>
      <Text
        style={{
          fontSize: responsiveScreenFontSize(1.5),
          fontFamily: theme.fonts.fontMedium,
          color: focused ? theme.colors.primary : theme.colors.grey,
        }}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarStyle: {
          height: 60,
          // position: 'absolute',
          // bottom: 16,
          // right: 16,
          // left: 16,
          // borderRadius: 16,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
