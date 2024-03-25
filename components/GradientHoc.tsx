import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';
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
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 36,
    elevation: 14
  },
});

export default GradientHoc;
