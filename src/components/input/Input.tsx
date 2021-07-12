import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../theme/Colors';
import {styles} from './styles';

interface Props {
  value: string;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  autoCorrect?: boolean;
  disabled?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'numeric' | 'email-address';
  error?: string;
  onChange: (text: string, name: string) => void;
}

const Input = ({
  value,
  name,
  placeholder,
  secureTextEntry,
  autoCorrect = false,
  disabled = false,
  autoCapitalize = 'none',
  keyboardType = 'default',
  error,
  onChange,
}: Props) => {
  const [isFocused, setFocus] = useState(false);

  return (
    <>
      <TextInput
        value={value}
        placeholder={placeholder}
        editable={!disabled}
        style={[
          styles.container,
          isFocused && styles.isFocused,
          value !== '' && !isFocused && styles.isActive,
          error !== undefined && styles.error,
          disabled && styles.isDisabled,
        ]}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        onChangeText={(text) => onChange(text, name)}
        keyboardType={keyboardType}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {error && (
        <Text style={styles.errorMessage}>
          <Icon name="warning" size={15} color={Colors.red} /> {error}
        </Text>
      )}
    </>
  );
};

export default Input;
