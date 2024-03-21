import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { useState } from 'react';

import BMICalculator from './screens/BMICalculator';

export default function App() {
  const [appState, setAppState] = useState(0)
  return (
    <View style={styles.flexOne}>
      <BMICalculator />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1
  }
});
