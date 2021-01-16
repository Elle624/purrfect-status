import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { getCatPicture, _mockUserInput } from '../../apiCalls';
import Picture from '../Picture';
import { _mockPicture1, _mockPicture2 } from '../../Test/_mockData';
jest.mock('../../apiCalls');

describe('Picture Component', () => {
  beforeEach(() => {
    getCatPicture.mockResolvedValueOnce(_mockPicture1);
  });

  it('should render loading before fetched image come back', async () => {
    render(<Picture setUserInput={jest.fn()} userInput={_mockUserInput} />, {
      wrapper: MemoryRouter
    });

    await waitFor(() =>
      expect(screen.getByText('Loading...')).toBeInTheDocument()
    );
  });

  it('should render correctly after fetched image comes back, and render different image after clicking button', async () => {
    getCatPicture.mockResolvedValue(_mockPicture2);
    render(<Picture setUserInput={jest.fn()} userInput={_mockUserInput} />, {
      wrapper: MemoryRouter
    });

    await waitFor(() =>
      expect(screen.getByTestId('backgeound-cat-image')).toHaveStyle(
        "background-image: url('https://cdn2.thecatapi.com/images/weo7Mo87q.jpg')"
      )
    );

    const generatePictureButton = screen.getByRole('button');
    expect(generatePictureButton).toBeInTheDocument();
    userEvent.click(generatePictureButton);

    await waitFor(() =>
      expect(screen.getByTestId('backgeound-cat-image')).toHaveStyle(
        "background-image: url('https://cdn2.thecatapi.com/images/a9l.jpg')"
      )
    );
  });
});
