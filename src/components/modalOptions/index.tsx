export default styles;
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { Icons } from '../../assets';


interface OptionItemProps {
  onPress: () => any;
  onPress1:() => any;
}
const MoreOptionScreen = ({ onPress,onPress1 }: OptionItemProps) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container1} onPress={onPress}>
        <Image
          source={Icons.manualCreate}
          style={styles.iconImageSize}
        />
        <View style={styles.textArrange}>
          <Text style={styles.name}>Manually Create Expenses</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container1} onPress={onPress1}>
        <Image
          source={Icons.income}
          style={styles.iconImageSize}
        />
        <View style={styles.textArrange}>
          <Text style={styles.name}>Create Income Data</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container1}>
        <Image
          source={Icons.clock}
          style={styles.iconImageSize}
        />
        <View style={styles.textArrange}>
          <Text style={styles.name}>Time</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {MoreOptionScreen};
