import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import RadioGroup from '../components/RadioGroup';
import ContentSwitcher from '../components/ContentSwitcher';

const BMICalculator = () => {
  const [unitSet, setUnitSet] = useState('Metric');
  const ageChangeHandler = (age: string) => {
    console.log(age);
  };
  const genderChangeHandler = (option: string) => {
    console.log(option);
  };
  const unitsChangeHandler = (unitType: string) => {
    setUnitSet(unitType)
  };
  const genderOptions = ['Male', 'Female'];
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.gradient} colors={['#00b8bb', '#00bb6e']}>
        <View style={styles.switcher}>
          <ContentSwitcher
            selected={unitSet}
            onChange={unitsChangeHandler}
            options={['Standard', 'Metric']}
          />
        </View>
        <View style={styles.inputs}>
          <Input label='Age' unit='years' onChange={ageChangeHandler} />
          <Input label='Height' unit='cm' onChange={ageChangeHandler} />
          <Input label='Weight' unit='kg' onChange={ageChangeHandler} />
          <RadioGroup
            label='Gender'
            options={genderOptions}
            onChange={genderChangeHandler}
          />
        </View>
        <View style={styles.buttons}>
          <View style={{ flex: 1 }}>
            <Button size='large' title='Reset' variant='outlined' />
          </View>
          <View style={{ flex: 1 }}>
            <Button size='large' title='Calculate' />
          </View>
        </View>
      </LinearGradient>
      <View style={{ paddingBottom: 20, alignItems: 'center' }}>
        <Image
          style={{ height: 50, width: 50 }}
          source={require('./../assets/logo.png')}
        />
        <Text style={{ color: '#aaa', fontSize: 12, marginTop: 10 }}>
          BMI Calculator
        </Text>
        <Text style={{ color: '#aaa', fontSize: 12 }}>
          A practice app built in React Native
        </Text>
      </View>
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
  switcher: {},
  inputs: {
    width: 320,
  },
  buttons: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 25,
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
