// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import Display from './Display';

test('<Display />', () => {
  // snapshot test
  it('should match snapshot', () => {
    expect(render(<Display />)).toMatchSnapshot();
  });

  // create test cases
  // red-led
  it('should display red-led when locked', () => {
    const component = render(<Display closed={true} locked={true} />);
    expect(component.getByText(/locked/i)).toHaveClass(/red-led/i);
  });

  // green-led
  it('should display green-led when unlocked', () => {
    const component = render(<Display closed={true} locked={false} />);
    expect(component.getByText(/unlocked/i)).toHaveClass(/green-led/i);
  });

  // red-led when closed
  it('should display red-led when closed', () => {
    const component = render(<Display closed={true} locked={false} />);
    expect(component.getByText(/closed/i)).toHaveClass(/red-led/i);
  });

  // green-led when closed
  it('should display green-led when open', () => {
    const component = render(<Display closed={false} locked={false} />);
    expect(component.getByText(/open/i)).toHaveClass(/green-led/i);
  });
});