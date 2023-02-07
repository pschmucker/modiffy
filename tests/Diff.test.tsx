import { render } from '@testing-library/react'
import { Diff } from '../src'


describe('Common render', () => {
    it ('Renders Diff without crashing', () => {
        render(<Diff oldValue={{}} newValue={{}} />);
    });
});
