import * as Head from 'next/head';

const headSpy = jest.spyOn(Head, 'default') as jest.Mock;

export default headSpy;
