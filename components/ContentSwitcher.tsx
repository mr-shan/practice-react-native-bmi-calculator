import { View, Pressable, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

interface IProps {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
}

const ContentSwitcher = (props: IProps) => {
  return (
    <View style={styles.container}>
      {props.options.map((option: string) => (
        <Pressable key={option} style={styles.button} onPress={() => props.onChange(option)}>
          <Text
            style={[
              styles.btnText,
              props.selected === option ? styles.btnTextSelected : {},
            ]}
          >
            {option}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ContentSwitcher;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    borderColor: COLORS.bgLight,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 20,
  },
  button: {
    width: 80,
  },
  btnText: {
    fontSize: 14,
    color: COLORS.bgLight,
    paddingVertical: 5,
    textAlign: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  btnTextSelected: {
    backgroundColor: COLORS.bgLight,
    borderColor: COLORS.bgLight,
    borderRadius: 14,
    overflow: 'hidden',
    color: COLORS.secondary500
  },
});
