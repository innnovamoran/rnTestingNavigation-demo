import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const SigninScreen: FC = (): JSX.Element => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView>
      <Text testID={'title-signin'}>Signin Screen</Text>
      <TouchableOpacity
        testID={'btn-nav-to-welcome'}
        onPress={() => {
          navigate('welcome' as never);
        }}>
        <Text>Nav to welcome</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SigninScreen;
