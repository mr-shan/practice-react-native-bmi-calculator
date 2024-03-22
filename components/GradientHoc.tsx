import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { ReactNode } from 'react';

import { GRADIENT_COLORS } from '../helper/styles';

interface IProps {
  children: ReactNode;
}

const GradientHoc = (props: IProps) => {
  return (
    <LinearGradient style={styles.gradient} colors={GRADIENT_COLORS}>
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    // backgroundColor: '#00bb6e',
    borderRadius: 30,
    paddingTop: 70,
    alignItems: 'center',
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
});

export default GradientHoc;
