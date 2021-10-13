import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';

const SignupScreen: FC = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text testID={'title-signup'}>Signups Screen</Text>
    </SafeAreaView>
  );
};

export default SignupScreen;
