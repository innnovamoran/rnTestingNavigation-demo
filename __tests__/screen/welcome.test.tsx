import React, {Component} from 'react';
import {render} from '@testing-library/react-native';
//import renderer from 'react-test-renderer';
import WelcomeScreen from '../../screen/welcome';
describe('Testing welcome screen', () => {
  // beforeEach
  // afterEach
  test('is render screen?', () => {
    //  const screen = renderer.create(<WelcomeScreen />);
    render(<WelcomeScreen />);
  });
});
