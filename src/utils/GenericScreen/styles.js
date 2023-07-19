import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 12.7,
    borderRadius: 20,
    margin: 1,
  },
  companyIcon: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
    height: 120,
    width: 135,
  },
});

export default styles;
