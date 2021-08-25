import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

// Release memory allocation between tests.
afterEach(cleanup);

describe('Contact component', () => {
    // baseline test - checks if ContactForm is rendering properly
    it('renders', () => {
        render(<Contact/>)
    });

    // snapshot test 
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact/>);
        
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders h1 Contect me', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('h1Contact')).toHaveTextContent('Contact me')
    })

    it('renders Submit button', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('submit-button')).toHaveTextContent('Submit')
    })
})