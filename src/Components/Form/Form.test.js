import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Form from '../Form';

describe('Form Component', () => {
  beforeEach(() => {
    render(<Form getUserInput={jest.fn()} />, { wrapper: MemoryRouter });
  })
  
  it('should render correctly', () => {
    expect(screen.getByText('Status Code')).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByText('What does it represents?')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Purrfect!');
  })

  it('should reflect user input in both inputs', () => {
    const statusCodeInput = screen.getByRole('spinbutton');
    userEvent.type(statusCodeInput, '202');
    expect(statusCodeInput).toHaveDisplayValue('202');

    const statusExplainationInput = screen.getByRole('textbox');
    userEvent.type(statusExplainationInput, 'Accepted');
    expect(statusExplainationInput).toHaveDisplayValue('Accepted');
  })
})