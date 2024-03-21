import { StyleSheet, TextInput, View, Text } from 'react-native';

interface IProps {
  label: string;
  unit: string;
  onChange: (text: string) => void;
}

const Input = (props: IProps) => {
  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.inputLabel}>{props.label}: </Text>
      <View>
        <TextInput
          keyboardType='numeric'
          autoCapitalize='none'
          autoComplete='off'
          style={styles.textInput}
          onChangeText={props.onChange}
        />
        <Text style={styles.inputUnit}>{props.unit} </Text>
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
    color: '#eee',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
    color: 'white',
    width: 120,
    marginHorizontal: 5,
  },
  inputUnit: {
    color: '#eee',
    fontSize: 18,
    alignSelf: 'flex-end',
  },
});

export default Input;
