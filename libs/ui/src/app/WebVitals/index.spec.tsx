import { render } from '@testing-library/react';
import { useReportWebVitals } from 'next/web-vitals';
import WebVitals from '.';

jest.mock('next/web-vitals', () => ({
  useReportWebVitals: jest.fn(),
}));

describe('WebVitals', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call useReportWebVitals on mount', () => {
    render(<WebVitals />);
    expect(useReportWebVitals).toHaveBeenCalledTimes(1);
    expect(typeof (useReportWebVitals as jest.Mock).mock.calls[0][0]).toBe('function');
  });

  it('should log metrics to console', () => {
    const mockMetric = { id: '1', name: 'FCP', value: 123 };
    const mockConsole = jest.spyOn(console, 'log').mockImplementation(() => {});
    let callback: (metric: unknown) => void = () => {};

    (useReportWebVitals as jest.Mock).mockImplementation((cb: typeof callback) => {
      callback = cb;
    });

    render(<WebVitals logs />);
    callback(mockMetric);

    expect(mockConsole).toHaveBeenCalledWith('[WebVitals]', mockMetric);
    mockConsole.mockRestore();
  });

  it('should render null', () => {
    const { container } = render(<WebVitals />);
    expect(container.firstChild).toBeNull();
  });
});
