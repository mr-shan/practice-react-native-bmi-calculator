import { StyleSheet, View, Text } from 'react-native';

import { useState } from 'react';

import RadioButton from './RadioButton';

interface IProps {
  label: string;
  value: string;
  options: string[];
  onChange: (text: string) => void;
}

const RadioGroup = (props: IProps) => {
  const [selected, setSelected] = useState(props.value);

  const radioPressHandler = (option: string) => {
    setSelected(option);
    props.onChange(option);
  };

  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.inputLabel}>{props.label}: </Text>
      <View style={styles.radioButtons}>
        {props.options.map((item) => (
          <RadioButton
            key={item}
            isSelected={item === selected}
            label={item}
            onChange={radioPressHandler}
          />
        ))}
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
    paddingVertical: 30,
    width: '100%',
    gap: 10,
  },
  inputLabel: {
    color: '#eee',
    fontSize: 24,
    fontWeight: 'bold',
  },
  radioButtons: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
});

export default RadioGroup;
