import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';

import { useState } from 'react';

import BMICalculator from './screens/BMICalculator';
import BMIResult from './screens/BMIResult';

import { calculateBMI } from './helper';

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

  return (
    <View style={styles.flexOne}>
      {appState === 0 && <BMICalculator onCalculateBMI={onCalculateBMI} />}
      {appState === 1 && bmi !== null && (
        <BMIResult bmi={bmi} onBackClick={backToCalculator} />
      )}
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
