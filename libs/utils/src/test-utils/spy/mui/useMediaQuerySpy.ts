const useMediaQuerySpy = jest.spyOn(
  require('@mui/material/useMediaQuery/useMediaQuery'),
  'default',
) as jest.Mock;

export default useMediaQuerySpy;
