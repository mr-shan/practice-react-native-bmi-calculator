import { StyleSheet, View } from 'react-native';

import Button from '../Button';

interface IProps {
  onCalculate: () => void;
  onReset: () => void;
}

const ActionButtons = (props: IProps) => {
  return (
    <View style={styles.buttons}>
      <View style={{ flex: 1 }}>
        <Button size='large' title='Reset' variant='outlined' onPress={props.onReset}/>
      </View>
      <View style={{ flex: 1 }}>
        <Button size='large' title='Calculate' onPress={props.onCalculate}/>
      </View>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 25,
  },
});
