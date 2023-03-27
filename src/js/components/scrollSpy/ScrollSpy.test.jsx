import { render, screen } from '@testing-library/react';
//components
import ScrollSpy from './ScrollSpy';

describe('<ScrollSpy />', () => {
  test('renders component name (scrollSpy)', () => {
    render(<ScrollSpy />);
    const title = screen.getByText(/scrollSpy/i);
    expect(title).toBeInTheDocument();
  });
});
