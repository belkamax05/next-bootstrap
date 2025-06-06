import * as getCurrentPosition from '.';

const getCurrentPositionSpy = jest.spyOn(getCurrentPosition, 'default') as jest.Mock;

export default getCurrentPositionSpy;
