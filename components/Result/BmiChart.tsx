import { StyleSheet, View, Text } from 'react-native';
import COLORS from '../../constants/colors';

interface IProps {
  selected: string
}

const BMIChart = (props: IProps) => {
  return (
    <View style={styles.bmiChart}>
      <Text style={{ textAlign: 'center', color: COLORS.text }}>BMI Chart</Text>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1 }}></View>
      <View style={[styles.bmiChartItem, props.selected === 'Underweight' ? styles.selected : {}]}>
        <Text style={styles.bmiChartItemText}>Below 18.5</Text>
        <Text style={styles.bmiChartItemText}>Underweight</Text>
      </View>
      <View style={[styles.bmiChartItem, props.selected === 'Healthy Weight' ? styles.selected : {}]}>
        <Text style={styles.bmiChartItemText}>18.5 to 24.9</Text>
        <Text style={styles.bmiChartItemText}>Healthy Weight</Text>
      </View>
      <View style={[styles.bmiChartItem, props.selected === 'Overweight' ? styles.selected : {}]}>
        <Text style={styles.bmiChartItemText}>25.0 to 29.9</Text>
        <Text style={styles.bmiChartItemText}>Overweight</Text>
      </View>
      <View style={[styles.bmiChartItem, props.selected === 'Obesity' ? styles.selected : {}]}>
        <Text style={styles.bmiChartItemText}>30 or higher</Text>
        <Text style={styles.bmiChartItemText}>Obesity</Text>
      </View>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1 }}></View>
    </View>
  );
};

export default BMIChart;

const styles = StyleSheet.create({
  bmiChart: {
    width: 280,
    marginTop: 40,
    marginBottom: 14,
    paddingHorizontal: 10,
    gap: 10,
  },
  bmiChartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  bmiChartItemText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: '500',
  },
  selected: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 16,
    borderColor: '#ddd',
  }
});
