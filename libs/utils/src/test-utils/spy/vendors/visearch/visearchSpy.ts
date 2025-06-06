import * as ViSearch from 'visearch-javascript-sdk';

const visearchSpy = jest.spyOn(ViSearch, 'default') as jest.Mock;

export default visearchSpy;
