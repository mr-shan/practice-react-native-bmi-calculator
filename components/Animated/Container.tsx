import React from 'react';
import { Animated, Easing, StyleSheet, ViewStyle } from 'react-native';

interface PropType {
  children: React.ReactNode;
  type: 'entry' | 'exit';
  style?: ViewStyle;
}

const AnimatedContainer = (props: PropType) => {
  const translateY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    translateY.setValue(0)
    Animated.spring(translateY, {
      toValue: 100,
      damping: props.type === 'entry' ? 20 : 2,
      useNativeDriver: true,
    }).start();
  }, [props.type]);

  const opacityInterpolation = translateY.interpolate({
    inputRange: [0, 100],
    outputRange: props.type === 'entry' ? [0.2, 1] : [1, 0],
  });
  const translateInterpolation = translateY.interpolate({
    inputRange: [0, 100],
    outputRange: props.type === 'entry' ? [-200, 0] : [0, -200],
  })

  return (
    <Animated.View
      style={[
        props.style,
        styles.container,
        { transform: [{ translateY: translateInterpolation }] },
        { opacity: opacityInterpolation },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

export default AnimatedContainer;

const styles = StyleSheet.create({
  container: {},
});
