import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import RNRestart from 'react-native-restart';
export default class ErrorBoundries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
      errorInfo: '',
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Oops!!! Something went wrong..</Text>
          <TouchableOpacity
            onPress={() => {
              RNRestart.Restart();
            }}>
            <Text>Reload</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}
