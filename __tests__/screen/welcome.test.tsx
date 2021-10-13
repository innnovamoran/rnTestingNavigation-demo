import React, {Component} from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import WelcomeScreen from '../../screen/welcome';

describe('Testing welcome screen', () => {
  // beforeEach
  // afterEach

  test('should be render welcome screen?', () => {
    render(<WelcomeScreen />);
  });
  test('should be navigate to signin screen?', () => {
    const {getByTestId, findByTestId} = render(<WelcomeScreen />);
    const btnSignin = getByTestId('btn-welcome-nav-signin');
    expect(btnSignin).toBeTruthy();
    fireEvent(getByTestId('btn-welcome-nav-signin'), 'onPress');
    const newScreen = findByTestId('title-signin');
    expect(newScreen).toBeTruthy();
  });
  test('should be navigate to signup screen?', () => {
    const {getByTestId, findByTestId} = render(<WelcomeScreen />);
    const btnSignup = getByTestId('btn-welcome-nav-signup');
    expect(btnSignup).toBeTruthy();
    fireEvent(getByTestId('btn-welcome-nav-signup'), 'onPress');
    const newScreen = findByTestId('title-signup');
    expect(newScreen).toBeTruthy();
  });
});

//btn-welcome-nav-signin
//btn-welcome-nav-signup
