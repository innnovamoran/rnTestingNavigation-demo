import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';

describe('Testing App.tsx', () => {
  beforeEach(async () => {
    jest.useFakeTimers(); // prev warn mock
  });
  test('should be init app?', () => {
    render(<App />);
  });
});
