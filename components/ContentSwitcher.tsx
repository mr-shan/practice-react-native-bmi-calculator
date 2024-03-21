import { View, Pressable, Text, StyleSheet } from 'react-native';

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
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  button: {
    width: 80,
  },
  btnText: {
    fontSize: 14,
    color: 'white',
    paddingVertical: 5,
    textAlign: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  btnTextSelected: {
    backgroundColor: '#029b9d',
    borderColor: 'white',
    borderRadius: 14,
    overflow: 'hidden'
  },
});
