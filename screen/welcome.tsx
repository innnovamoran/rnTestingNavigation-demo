import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const WelcomeScreen: FC = (): JSX.Element => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView>
      <Text>Welcome Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#880e4f',
          width: '90%',
          alignSelf: 'center',
          marginVertical: 10,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
        onPress={() => {
          navigate('signin' as never);
        }}>
        <Text>Ir a signin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#880e4f',
          width: '90%',
          alignSelf: 'center',
          marginVertical: 10,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}
        onPress={() => {
          navigate('signup' as never);
        }}>
        <Text>Ir a signup</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
