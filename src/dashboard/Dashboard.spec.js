// Test away
import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from './Dashboard';

test('<Dashboard />', () => {
  // snapshot test
  it('should match snapshot', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
  });

  // create test cases
  it('should render controls & display', () => {
    const {getByText} = render(<Dashboard />);
      getByText(/unlocked/i);
      getByText(/open/i);
      getByText(/lock gate/i);
      getByText(/close gate/i);
  });
});