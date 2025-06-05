import { AwaitedLegacy } from '@/types';

interface WaitPromiseDictionaryOptions<TKey> {
  /** when true, promise will always resolve({ _error }) instead of throwing */
  safe?: boolean;
  /**  */
  onError?: (key: TKey, error: unknown) => void;
}

const waitPromiseDictionary = async <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TPromises extends Record<string, Promise<unknown>>,
  TKey extends keyof TPromises,
  TResult extends {
    [index in TKey]: AwaitedLegacy<TPromises[index]>;
  },
>(
  list: TPromises,
  options?: WaitPromiseDictionaryOptions<TKey>,
) => {
  const { safe, onError } = options || {};
  const keys = Object.keys(list) as TKey[];
  const results = await Promise.all(
    keys.map((key) => {
      const promise = list[key];
      if (safe) {
        return new Promise((resolve) => {
          promise.then(resolve).catch((error) => {
            if (onError) onError(key, error);
            resolve(null);
          });
        });
      }
      return promise;
    }),
  );
  const result: Partial<TResult> = {};
  keys.forEach((key, index) => {
    result[key as string] = results[index];
  });
  return result as TResult;
};

export default waitPromiseDictionary;
