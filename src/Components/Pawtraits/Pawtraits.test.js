import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Pawtraits from '../Pawtraits';
import { _mockSavedPawtraits } from '../../Test/_mockData';

describe('Pawtraits Component', () => {
  it('should render all saved pawtraits', () => {
    render(<Pawtraits savedPawtraits={_mockSavedPawtraits} />),
      { wrapper: MemoryRouter };

    expect(screen.getAllByTestId('background-cat-picture')).toHaveLength(2);
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('Okay')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();
    expect(screen.getByText('Multiple Choices')).toBeInTheDocument();
  });
});
