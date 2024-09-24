import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ISRPage from '@/app/pages/isr/page';

describe('ISRPage', () => {
  beforeAll(() => {
    // Mock the system time to a fixed date
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2021-01-01T00:00:00.000Z'));
  });

  afterAll(() => {
    // Restore the real timers after the tests
    jest.useRealTimers();
  });

  it('renders correctly with mocked time', async () => {
    await render(<ISRPage />);

    expect(
      screen.getByText('This page was generated at: 2021-01-01T00:00:00.000Z')
    ).toBeInTheDocument();
  });
});
