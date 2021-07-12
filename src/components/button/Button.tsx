import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../theme/Colors';
import {styles} from './styles';

interface Props {
  title: string;
  icon?: string;
  outline?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  onPress: () => void;
}

const Button = ({
  title = 'title',
  icon,
  outline,
  disabled,
  secondary,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={[
          styles.container,
          outline && styles.outlineContainer,
          disabled && styles.disabledContainer,
          secondary && styles.secondaryContainer,
        ]}>
        <Text
          style={[
            styles.title,
            outline && styles.outlineText,
            secondary && styles.secondaryText,
          ]}>
          {title}
        </Text>
        {icon && (
          <Icon
            name={icon}
            size={30}
            color={outline ? Colors.primary : Colors.white}
            style={styles.iconContainer}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
