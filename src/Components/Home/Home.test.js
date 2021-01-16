import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';
import Picture from '../Picture';
import Form from '../Form';
import {
  _mockPicture1,
  _mockPicture2,
  _mockUserInput
} from '../../Test/_mockData';

describe('Home Component', () => {
  it('should render both picture and form sections', async () => {
    render(
      <Home>
        <Picture setUserInput={jest.fn()} userInput={_mockUserInput} />
        <Form getUserInput={jest.fn()} />
      </Home>,
      { wrapper: MemoryRouter }
    );

    await waitFor(() =>
      expect(screen.getByTestId('picture-section')).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByTestId('form-section')).toBeInTheDocument()
    );
  });
});
