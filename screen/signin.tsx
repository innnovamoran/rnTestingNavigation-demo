import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';

const SigninScreen: FC = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text testID={'title-signin'}>Signin Screen</Text>
    </SafeAreaView>
  );
};

export default SigninScreen;
