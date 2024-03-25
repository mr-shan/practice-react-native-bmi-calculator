import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';

import { useState } from 'react';

import BMICalculator from './screens/BMICalculator';
import BMIResult from './screens/BMIResult';

import { calculateBMI } from './helper';
import COLORS from './constants/colors';

export default function App() {
  const [appState, setAppState] = useState(0);
  const [bmi, setBmi] = useState<null | number>(null);

  const onCalculateBMI = (
    age: number,
    height: number,
    weight: number,
    gender: string
  ) => {
    try {
      const bmiVal = calculateBMI(weight, height, age, gender);
      setBmi(bmiVal);
      console.log(bmiVal);
      setAppState(1);
    } catch (error) {
      Alert.alert(
        'Failed to calculate BMI',
        error?.message || 'Please enter all the details valid.'
      );
    }
  };

  const backToCalculator = () => {
    setBmi(null);
    setAppState(0);
  };

  let CurrentScreen = <BMICalculator onCalculateBMI={onCalculateBMI} />

  if (appState === 1 && bmi !== null) {
    CurrentScreen = <BMIResult bmi={bmi} onBackClick={backToCalculator} />
  }

  return (
    <View style={styles.flexOne}>
      { CurrentScreen }
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    backgroundColor: COLORS.bgLight,
  },
});
