import { View, Text, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={{ paddingBottom: 20, alignItems: 'center' }}>
      <Image
        style={{ height: 50, width: 50 }}
        source={require('./../assets/logo.png')}
      />
      <Text style={{ color: '#aaa', fontSize: 12, marginTop: 10 }}>
        BMI Calculator
      </Text>
      <Text style={{ color: '#aaa', fontSize: 12 }}>
        A practice app built in React Native
      </Text>
    </View>
  );
};

export default Footer