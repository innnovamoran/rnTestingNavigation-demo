import React, {Component} from 'react';
import {render} from '@testing-library/react-native';
import Signin from '../../screen/signin';

describe('Testing signin screen', () => {
  // beforeEach
  // afterEach
  test('should be render signin screen?', () => {
    render(<Signin />);
  });
});
