import { MOCK_ISO_DATE_TIME } from '@/utils/constants/mocks/constants/dates';
import waitPromiseDictionary from '.';

jest.useFakeTimers().setSystemTime(new Date(MOCK_ISO_DATE_TIME));

describe('waitPromiseDictionary', () => {
  it('should resolve all promises with right data', async () => {
    const samplePromise = (text: string) => {
      return new Promise<string>((resolve) => {
        resolve(`result is ` + text);
      });
    };
    const promises = {
      res1: samplePromise('data1'),
      res2: samplePromise('data2'),
    };
    const result = await waitPromiseDictionary(promises);
    expect(result).toStrictEqual({
      res1: 'result is data1',
      res2: 'result is data2',
    });
  });

  it('should call onError when safe execution fails', async () => {
    const onErrorMock = jest.fn();
    const successPromise = (text: string) => {
      return new Promise<string>((resolve) => {
        resolve(`result is ` + text);
      });
    };
    const errorPromise = (text: string) => {
      return new Promise<string>((_resolve, reject) => {
        reject(`error is ` + text);
      });
    };
    const promises = {
      res1: successPromise('data1'),
      res2: errorPromise('data2'),
      res3: errorPromise('data3'),
    };
    const result = await waitPromiseDictionary(promises, { safe: true, onError: onErrorMock });
    expect(onErrorMock).toHaveBeenCalledTimes(2);
    expect(result).toStrictEqual({
      res1: 'result is data1',
      res2: null,
      res3: null,
    });
  });

  it('should run successfully in safe mode, when no onError is provided', async () => {
    const successPromise = (text: string) => {
      return new Promise<string>((resolve) => {
        resolve(`result is ` + text);
      });
    };
    const errorPromise = (text: string) => {
      return new Promise<string>((_resolve, reject) => {
        reject(`error is ` + text);
      });
    };
    const promises = {
      res1: successPromise('data1'),
      res2: errorPromise('data2'),
      res3: errorPromise('data3'),
    };
    const result = await waitPromiseDictionary(promises, { safe: true });
    expect(result).toStrictEqual({
      res1: 'result is data1',
      res2: null,
      res3: null,
    });
  });
});
