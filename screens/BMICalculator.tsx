import { StyleSheet, View, Alert, SafeAreaView } from 'react-native';
import { useState } from 'react';

import GradientHoc from '../components/GradientHoc';
import Input from '../components/Input';
import InputForFeetInches from '../components/InputForFeetInches';
import RadioGroup from '../components/RadioGroup';
import ContentSwitcher from '../components/ContentSwitcher';
import ActionButtons from '../components/Calculator/ActionButtons';
import Footer from '../components/Footer';

import COLORS from '../constants/colors';

import { validateInputs } from '../helper';

interface IProps {
  onCalculateBMI: (
    age: number,
    height: number,
    weight: number,
    gender: string
  ) => void;
}

const BMICalculator = (props: IProps) => {
  const [unitSet, setUnitSet] = useState('Metric');
  const [age, setAge] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [gender, setGender] = useState('Male');

  const parseNumberAndSetProperty = (
    numStr: string,
    setterFunction: Function
  ) => {
    numStr = numStr.trim();
    setterFunction(numStr);
  };

  const ageChangeHandler = (age: string) => {
    parseNumberAndSetProperty(age, setAge);
  };
  const heightChangeHandler = (height: string) => {
    parseNumberAndSetProperty(height, setHeight);
  };
  const weightChangeHandler = (weight: string) => {
    parseNumberAndSetProperty(weight, setWeight);
  };
  const genderChangeHandler = (gender: string) => {
    setGender(gender);
  };
  const unitsChangeHandler = (unitType: string) => {
    setUnitSet(unitType);
    setHeight('');
    setWeight('');
  };
  const resetHandler = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setGender('Male');
    setUnitSet('Metric');
  };
  const calculateHandler = () => {
    const parsedAge = parseFloat(age);
    const parsedHeight = parseFloat(height);
    let parsedWeight = parseFloat(weight);
    if (unitSet === 'Standard') {
      parsedWeight /= 2.204623;
    }
    let errorMessage = validateInputs(parsedAge, parsedWeight, parsedHeight);
    if (errorMessage) {
      Alert.alert('Invalid Inputs', errorMessage);
      return;
    }
    props.onCalculateBMI(parsedAge, parsedHeight / 100, parsedWeight, gender);
  };
  const HeightComponent = unitSet === 'Metric' ? Input : InputForFeetInches;
  return (
    <View style={styles.container}>
      <GradientHoc>
        <SafeAreaView style={styles.safeAreaView}>
          <ContentSwitcher
            selected={unitSet}
            onChange={unitsChangeHandler}
            options={['Standard', 'Metric']}
          />
          <View style={styles.inputs}>
            <Input
              value={age}
              label='Age'
              unit='years'
              onChange={ageChangeHandler}
            />
            <Input
              value={weight}
              label='Weight'
              unit={unitSet === 'Metric' ? 'kg' : 'pounds'}
              onChange={weightChangeHandler}
            />
            <HeightComponent
              value={height}
              label='Height'
              unit='cm'
              onChange={heightChangeHandler}
            />
            <RadioGroup
              value={gender}
              label='Gender'
              options={['Male', 'Female']}
              onChange={genderChangeHandler}
            />
          </View>
          <ActionButtons
            onCalculate={calculateHandler}
            onReset={resetHandler}
          />
        </SafeAreaView>
      </GradientHoc>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  inputs: {
    width: 320,
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 200,
  },
  inputLabel: {
    color: COLORS.bgLight,
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  textInput: {
    borderBottomColor: COLORS.text,
    borderBottomWidth: 1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center',
    color: COLORS.bgLight,
    width: 60,
    marginHorizontal: 5,
  },
  inputUnit: {
    color: COLORS.text,
    fontSize: 18,
    alignSelf: 'flex-end',
  },
  safeAreaView: {
    alignItems: 'center',
  }
});

export default BMICalculator;
