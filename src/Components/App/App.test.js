import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('App Component', () => {
  beforeEach(() => {});

  it('should render correctly with corect url, nav button should redirect users to new page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(history.location.pathname).toBe('/');
    expect(screen.getByText('Purrfect Status')).toBeInTheDocument();
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    const navButton = screen.getAllByRole('button')[0];
    expect(navButton).toHaveTextContent('Saved Pawtraits');
    expect(navButton).toBeInTheDocument();

    userEvent.click(navButton);
    expect(history.location.pathname).toBe('/saved-pawtraits');
    expect(screen.getByText('Return Home')).toBeInTheDocument();
  });
});
