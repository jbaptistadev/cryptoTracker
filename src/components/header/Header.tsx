import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import useAuth from '../../hooks/useAuth';

interface Props {
  title?: string;
}

const Header = ({title}: Props) => {
  const navigation = useNavigation();
  const {logOut, loading, isLogged} = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => title && navigation.goBack()}>
        <View style={styles.gotoBackContainer}>
          <Icon
            name="chevron-back-outline"
            size={20}
            color={title ? Colors.white : Colors.primary}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
      {isLogged && (
        <View>
          <TouchableOpacity
            style={styles.logoutIconContainer}
            onPress={() => logOut()}
            disabled={loading}>
            <View>
              <Icon name="exit-outline" color={Colors.white} size={25} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
