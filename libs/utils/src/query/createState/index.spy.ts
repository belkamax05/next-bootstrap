import createState from '.';

/**
 * Spy wrapper for createReactQueryState instance
 * @param state instance of createReactQueryState
 * @returns spy object
 */
const createStateSpy = (state: ReturnType<typeof createState>) => {
  const setData = jest.spyOn(state, 'setData') as jest.Mock;
  const getData = jest.spyOn(state, 'getData') as jest.Mock;
  const useData = jest.spyOn(state, 'useData') as jest.Mock;
  return {
    setData,
    getData,
    useData,
  };
};

export default createStateSpy;
