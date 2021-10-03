import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screen/welcome';
import SigninScreen from '../screen/signin';
import SignupScreen from '../screen/signup';

const Stack = createNativeStackNavigator();

const listStack: {
  private: [];
  public: {name: string; component: FC}[];
} = {
  private: [],
  public: [
    {name: 'welcome', component: WelcomeScreen},
    {name: 'signin', component: SigninScreen},
    {name: 'signup', component: SignupScreen},
  ],
};

const NoAuthStack: FC = (): JSX.Element => (
  <Stack.Navigator>
    {listStack.public.map(({name, component}, index: number) => (
      <Stack.Screen key={index.toString()} component={component} name={name} />
    ))}
  </Stack.Navigator>
);

export const Navigation: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <NoAuthStack />
    </NavigationContainer>
  );
};
