import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';

import GradientHoc from '../components/GradientHoc';
import BMIChart from '../components/Result/BmiChart';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { AntDesign } from '@expo/vector-icons';

import { getBmiCategoryData } from '../helper';
import COLORS from '../constants/colors';

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
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.header}>
            <Text style={styles.headerInfo}>Your body mass index is:</Text>
            <Text style={styles.headerTitle}>{props.bmi}</Text>
            <View style={styles.category}>
              <Text style={[styles.categoryText, categoryStyle]}>
                {bmiCategory.type}
              </Text>
            </View>
          </View>
          <BMIChart selected={bmiCategory.type} />
          <View style={styles.homeButton}>
            <Button variant='default' onPress={props.onBackClick}>
              <View style={styles.homeButtonContent}>
                <AntDesign name='home' size={18} color={COLORS.primary500} />
                <Text style={styles.homeButtonText}>Home</Text>
              </View>
            </Button>
          </View>
        </SafeAreaView>
      </GradientHoc>
      <Footer />
    </View>
  );
};

export default BMIResult;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    marginTop: 20,
    width: 250,
    gap: deviceHeight > 700 ? 20 : 8,
  },
  headerInfo: {
    color: COLORS.text,
    fontSize: 18,
    textAlign: 'center',
  },
  backButton: {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    color: COLORS.bgLight,
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  category: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
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
    marginTop: deviceHeight > 700 ? 18 : 8,
    marginBottom: deviceHeight > 700 ? 30 : 22,
    width: 120,
  },
  homeButtonContent: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  homeButtonText: {
    color: COLORS.primary500,
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeButtonImage: {
    height: 16,
    width: 16,
  },
  safeAreaView: {
    alignItems: 'center',
    paddingTop: Platform.select({ ios: 0, android: 25 }),
  },
});
