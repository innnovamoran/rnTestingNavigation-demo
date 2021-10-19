import React, {Component} from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import WelcomeScreen from '../../screen/welcome';

import {device, expect, element, by, waitFor} from 'detox';

describe('Testing welcome screen', () => {
  // beforeEach
  // afterEach
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('should be render welcome screen?', () => {
    render(<WelcomeScreen />);
  });

  it('should have btn signin screen?', async () => {
    await expect(element(by.id('btn-welcome-nav-signin'))).toBeVisible();
  });
  /*   test('should be navigate to signin screen?', () => {
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
  }); */
});

//btn-welcome-nav-signin
//btn-welcome-nav-signup
