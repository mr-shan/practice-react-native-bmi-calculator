import { StyleSheet, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import Input from '../components/Input';
import RadioGroup from '../components/RadioGroup';
import ContentSwitcher from '../components/ContentSwitcher';
import ActionButtons from '../components/Calculator/ActionButtons';
import Footer from '../components/Footer';

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
    const parsedWeight = parseFloat(weight);
    let errorMessage = ''
    if (!(age && height && weight)) {
      errorMessage = 'Please enter all the details.';
    }
    if (isNaN(parsedAge)) {
      errorMessage = 'The age you entered is not valid.';
    }
    if (isNaN(parsedHeight)) {
      errorMessage = 'The height you entered is not valid.';
    }
    if (isNaN(parsedWeight)) {
      errorMessage = 'The weight you entered is not valid.';
    }
    if (errorMessage) {
      Alert.alert('Invalid Inputs', errorMessage)
      return;
    }
    props.onCalculateBMI(parsedAge, parsedHeight / 100, parsedWeight, gender);
  };
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.gradient} colors={['#008e9b', '#00bbae', '#00bb92', '#00bb6e']}>
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
            value={height}
            label='Height'
            unit='cm'
            onChange={heightChangeHandler}
          />
          <Input
            value={weight}
            label='Weight'
            unit='kg'
            onChange={weightChangeHandler}
          />
          <RadioGroup
            value={gender}
            label='Gender'
            options={['Male', 'Female']}
            onChange={genderChangeHandler}
          />
        </View>
        <ActionButtons onCalculate={calculateHandler} onReset={resetHandler} />
      </LinearGradient>
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
  gradient: {
    // backgroundColor: '#00bb6e',
    borderRadius: 30,
    paddingTop: 70,
    alignItems: 'center',
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  inputs: {
    marginTop: 16,
    width: 320,
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 200,
  },
  inputLabel: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  textInput: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center',
    color: 'white',
    width: 60,
    marginHorizontal: 5,
  },
  inputUnit: {
    color: '#eee',
    fontSize: 18,
    alignSelf: 'flex-end',
  },
});

export default BMICalculator;
