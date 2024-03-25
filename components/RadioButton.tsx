import { StyleSheet, Pressable, View, Text } from 'react-native';
import COLORS from '../constants/colors';

interface IProps {
  label: string;
  isSelected: boolean;
  onChange: (text: string) => void;
}

const RadioButton = (props: IProps) => {
  const radioPressHandler = () => {
    props.onChange(props.label);
  };
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={radioPressHandler} style={styles.radioButton}>
        <View
          style={
            (styles.radioSelected,
            props.isSelected ? styles.radioSelected : {})
          }
        ></View>
      </Pressable>
      <Pressable onPress={radioPressHandler}>
        <Text style={styles.radioLabel}>{props.label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  radioButton: {
    borderRadius: 20,
    borderColor: COLORS.bgLight,
    borderWidth: 2,
    padding: 2,
    width: 20,
    height: 20,
  },
  radioSelected: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.bgLight,
    borderRadius: 20,
  },
  radioLabel: {
    color: COLORS.bgLight,
    fontSize: 18,
  },
});

export default RadioButton;
