// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Controls from './Controls';

test('<Controls />', () => {
    // snapshot test
    it('should match snapshot', () => {
      expect(render(<Controls />)).toMatchSnapshot();
    });
  
    // create test cases
    it('should render button to toggle states', () => {
      const {getByText} = render(<Controls />);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    });

    // disable lock/unlock button when open
    it('should disable lock/unlock button when open', () => {
      const {getByText} = render(<Controls closed={false} />);
        expect(getByText(/lock gate/i)).toBeDisabled();
    });

    // disable open/close button when locked
    it('should disable open/close button when open', () => {
      const {getByText} = render(<Controls locked={true} />);
        expect(getByText(/close gate/i)).toBeDisabled();
    });

    // toggleClosed to change on button click
    it('should toggleClosed change on button click', () => {
      const toggleClosed = jest.fn(); // mock
      const {getByText} = render(<Controls toggleClosed={toggleClosed} />);
    
      // fireEvent
      fireEvent.click(getByText(/close gate/i));
      expect(toggleClosed).toBeCalledTimes(1);
    });
  }); 