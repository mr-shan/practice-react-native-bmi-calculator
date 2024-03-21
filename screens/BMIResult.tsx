import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Footer from '../components/Footer';

interface IProps {
  bmi: number;
}

const BMIResult = (props: IProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={['#008e9b', '#00bbae', '#00bb92', '#00bb6e']}
      >
        <View style={styles.header}>
          <Text style={styles.headerInfo}>Your body mass index is:</Text>
          <Text style={styles.headerTitle}>{props.bmi}</Text>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Overweight</Text>
          </View>
        </View>
      </LinearGradient>
      <Footer />
    </View>
  );
};

export default BMIResult;

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
    paddingTop: 90,
    alignItems: 'center',
    paddingBottom: 25,
    paddingHorizontal: 10,
  },
  header: {
    width: 250,
    gap: 20
  },
  headerInfo: {
    color: '#eee',
    fontSize: 18,
    textAlign: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  category: {
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  categoryText: {
    borderRadius: 25,
    overflow: 'hidden',
    paddingVertical: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#ffc800',
    color: '#666',
  }
});
