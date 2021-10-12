import React, {Component} from 'react';
import {render} from '@testing-library/react-native';
import WelcomeScreen from '../../screen/welcome';

describe('Testing welcome screen', () => {
  // beforeEach
  // afterEach
  test('should be render welcome screen?', () => {
    render(<WelcomeScreen />);
  });
});
