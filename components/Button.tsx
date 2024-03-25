import { Pressable, View, Text, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

import COLORS from '../constants/colors';

interface IProps {
  title?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'default' | 'danger' | 'text' | 'outlined';
  disabled?: boolean;
  children?: ReactNode;
  onPress?: () => void;
}

const Button = (props: IProps) => {
  const size = props.size || 'medium';
  const variant = props.variant || 'default';

  let viewStyle = {},
    textStyle = {};

  switch (size) {
    case 'small':
      viewStyle = styles.view;
      textStyle = { ...styles.text, ...styles.smallText };
      break;
    case 'medium':
      viewStyle = styles.view;
      textStyle = { ...styles.text, ...styles.mediumText };
      break;
    case 'large':
      viewStyle = styles.view;
      textStyle = { ...styles.text, ...styles.largeText };
      break;
  }

  switch (variant) {
    case 'default':
      viewStyle = { ...viewStyle, ...styles.defaultView };
      textStyle = { ...textStyle, ...styles.defaultText };
      break;
    case 'primary':
      viewStyle = { ...viewStyle, ...styles.primaryView };
      textStyle = { ...textStyle, ...styles.primaryText };
      break;
    case 'danger':
      viewStyle = { ...viewStyle, ...styles.dangerView };
      textStyle = { ...textStyle, ...styles.dangerText };
      break;
    case 'text':
      viewStyle = { ...viewStyle };
      textStyle = { ...textStyle, ...styles.textText };
      break;
    case 'outlined':
      viewStyle = { ...viewStyle, ...styles.outlinedView };
      textStyle = { ...textStyle, ...styles.primaryText };
      break;
  }

  return (
    <View style={{ ...viewStyle, opacity: props.disabled ? 0.5 : 1 }}>
      <Pressable
        onPress={props.onPress}
        android_ripple={variant === 'text' ? {} : styles.pressable_ripple}
        disabled={props.disabled}
        style={(props) => props.pressed && styles.pressable_ios}
      >
        {props.children && <View style={styles.childrenView}>{props.children}</View>}
        {props.title && <Text style={textStyle}>{props.title}</Text>}
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  view: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  primaryView: {
    backgroundColor: COLORS.primary500,
  },
  outlinedView: {
    backgroundColor: 'transparent',
    borderColor: COLORS.bgLight,
    borderWidth: 2,
  },
  defaultView: {
    backgroundColor: COLORS.bgLight,
    borderColor: COLORS.bgLight,
    borderWidth: 2,
  },
  dangerView: {
    backgroundColor: COLORS.bgDanger,
  },
  textView: {
    borderWidth: 0
  },
  pressable_ios: {
    opacity: 0.5,
  },
  pressable_ripple: { color: '#0d9059' },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  primaryText: {
    color: COLORS.bgLight,
  },
  defaultText: {
    color: COLORS.primary500,
  },
  dangerText: {
    color: COLORS.bgLight,
  },
  textText: {
    color: COLORS.primary500,
  },
  smallText: {
    fontSize: 12,
    padding: 8,
  },
  mediumText: {
    fontSize: 16,
    padding: 12,
  },
  largeText: {
    fontSize: 20,
    padding: 12,
  },
  childrenView: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
