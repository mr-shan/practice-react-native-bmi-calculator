import { StyleSheet, TextInput, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import COLORS from '../constants/colors';

interface IProps {
  label: string;
  value: string;
  unit: string;
  onChange: (text: string) => void;
}

const InputForFeetInches = (props: IProps) => {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');

  const calculateHeight = (feet: string, inches: string) => {
    if (feet.trim() === '' || inches.trim() === '') return;
    const feetNum = parseInt(feet);
    const inchesNum = parseInt(inches);

    const feetIntoInches = feetNum * 12;
    const totalInches = feetIntoInches + inchesNum;
    const cms = totalInches * 2.54;
    props.onChange(cms.toString())
  }

  useEffect(() => {
    calculateHeight(feet, inches)
  }, [feet, inches])

  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.inputLabel}>{props.label}: </Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TextInput
            value={feet}
            keyboardType='numeric'
            autoCapitalize='none'
            autoComplete='off'
            style={styles.textInput}
            onChangeText={setFeet}
          />
          <Text style={styles.inputUnit}>feet</Text>
        </View>
        <View>
          <TextInput
            value={inches}
            keyboardType='numeric'
            autoCapitalize='none'
            autoComplete='off'
            style={styles.textInput}
            onChangeText={setInches}
          />
          <Text style={styles.inputUnit}>inches</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    gap: 10,
  },
  inputLabel: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textInput: {
    borderBottomColor: COLORS.text,
    borderBottomWidth: 1,
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    color: COLORS.bgLight,
    width: 56,
    marginHorizontal: 5,
  },
  inputUnit: {
    color: COLORS.text,
    fontSize: 18,
    alignSelf: 'flex-end',
    marginRight: 5
  },
});

export default InputForFeetInches;
