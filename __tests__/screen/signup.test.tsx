import React, {Component} from 'react';
import {render} from '@testing-library/react-native';
import Signup from '../../screen/signup';

describe('Testing signup screen', () => {
  // beforeEach
  // afterEach
  test('should be render signup screen?', () => {
    render(<Signup />);
  });
});
