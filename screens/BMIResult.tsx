import { StyleSheet, View, Text, Image } from 'react-native';

import GradientHoc from '../components/GradientHoc';
import BMIChart from '../components/Result/BmiChart';
import Footer from '../components/Footer';
import Button from '../components/Button';

import { getBmiCategoryData } from '../helper';

interface IProps {
  bmi: number;
  onBackClick: () => void;
}

const BMIResult = (props: IProps) => {
  if (!props.bmi) {
    props.onBackClick();
    return <></>;
  }

  const bmiCategory = getBmiCategoryData(props.bmi);

  const categoryStyle = {
    backgroundColor: bmiCategory.background,
    color: bmiCategory.textColor,
  };

  return (
    <View style={styles.container}>
      <GradientHoc>
        <View style={styles.header}>
          <Text style={styles.headerInfo}>Your body mass index is:</Text>
          <Text style={styles.headerTitle}>{props.bmi}</Text>
          <View style={styles.category}>
            <Text style={[styles.categoryText, categoryStyle]}>
              {bmiCategory.type}
            </Text>
          </View>
        </View>
        <BMIChart selected={bmiCategory.type}/>
        <View style={styles.homeButton}>
          <Button title='Back to Home' onPress={props.onBackClick}></Button>
        </View>
      </GradientHoc>
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
  header: {
    marginTop: 10,
    width: 250,
    gap: 20,
  },
  headerInfo: {
    color: '#eee',
    fontSize: 18,
    textAlign: 'center',
  },
  backButton: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  category: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  categoryText: {
    borderRadius: 25,
    elevation: 15,
    overflow: 'hidden',
    paddingVertical: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  homeButton: {
    marginTop: 25,
    marginBottom: 5,
    width: 180,
  },
});
