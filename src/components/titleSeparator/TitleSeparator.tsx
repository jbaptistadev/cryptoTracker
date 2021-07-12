import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
}

const TitleSeparator = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.hairline} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.hairline} />
    </View>
  );
};

export default TitleSeparator;
