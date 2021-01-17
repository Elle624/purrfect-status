import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getCatPicture } from '../../apiCalls';
import { _mockPicture1 } from '../../Test/_mockData';
import App from '../App';
jest.mock('../../apiCalls');

describe('App Component', () => {
  beforeEach(() => {
    getCatPicture.mockResolvedValueOnce(_mockPicture1);
  });

  it('should render correctly with corect url, nav button should redirect users to new page', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(getCatPicture).toBeCalledTimes(1);
    expect(history.location.pathname).toBe('/');
    expect(screen.getByText('Purrfect Status')).toBeInTheDocument();
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    const navButton = screen.getAllByRole('button')[0];
    expect(navButton).toHaveTextContent('Saved Pawtraits');
    expect(navButton).toBeInTheDocument();

    userEvent.click(navButton);
    expect(history.location.pathname).toBe('/saved-pawtraits');
    expect(screen.getByText('Return Home')).toBeInTheDocument();

    await act(() => Promise.resolve());
  });

  it('users should be able to add inputs to the picture', async () => {
    render(<App />, { wrapper: MemoryRouter });

    userEvent.type(screen.getByRole('spinbutton'), '200');
    userEvent.type(screen.getByRole('textbox'), 'Ok');
    userEvent.click(screen.getByText('Purrfect!'));

    expect(screen.getAllByTestId('user-inputs')).toHaveLength(2);

    await act(() => Promise.resolve());
  });

  it('users should be able to save, and see saved in saved Pawtraits page', async () => {
    render(<App />, { wrapper: MemoryRouter });

    userEvent.type(screen.getByRole('spinbutton'), '202');
    userEvent.type(screen.getByRole('textbox'), 'Accepted');
    userEvent.click(screen.getByText('Purrfect!'));
    userEvent.click(screen.getByTestId('paw-icon'));
    userEvent.click(screen.getByText('Saved Pawtraits'));

    expect(screen.getByTestId('saved-pawtrait')).toBeInTheDocument();
    expect(screen.queryByText('200')).not.toBeInTheDocument();

    await act(() => Promise.resolve());
  });
});
