import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import SSRPage from '../src/app/pages/ssr/page';

describe('SSRPage', () => {
  beforeAll(() => {
    // Mock the system time to a fixed date
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2021-01-01T00:00:00Z'));
  });

  afterAll(() => {
    // Restore the real timers after the tests
    jest.useRealTimers();
  });

  it('renders correctly with mocked time', async () => {
    await render(<SSRPage />);

    expect(screen.getByText('This page was rendered on the server at: 2021-01-01T00:00:00.000Z')).toBeInTheDocument();
  });
});
