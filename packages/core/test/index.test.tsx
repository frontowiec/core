import * as React from 'react';
import { Button } from '../src/index';
import { render } from '@testing-library/react';

describe('it', () => {
  it('renders without crashing', () => {
    const { debug, getByText } = render(<Button />);

    debug();

    expect(getByText('Awesome madkom button')).toBeDefined();
  });
});
