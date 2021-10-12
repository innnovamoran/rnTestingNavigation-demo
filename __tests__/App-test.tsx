import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';

describe('Testing App.tsx', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test('is render app?', () => {
    render(<App />);
  });
});
