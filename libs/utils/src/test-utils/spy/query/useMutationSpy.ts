import * as reactQuery from '@tanstack/react-query';

const useMutationSpy = jest.spyOn(reactQuery, 'useMutation') as jest.Mock;

export default useMutationSpy;
