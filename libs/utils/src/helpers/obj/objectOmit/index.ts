import { AnyObject } from '@/types';

/**
 * constructs new object with subset of original object properties excluding 'keys'
 * @param obj object to take properties from
 * @param omitKeys list of properties to be excluded from 'obj'
 * @returns obj subset
 */
const objectOmit = <TObj extends AnyObject, TKey extends keyof TObj, TOmitKey extends TKey>(
  obj: TObj,
  keys: TOmitKey[],
) =>
  Object.assign(
    {},
    ...Object.keys(obj)
      .filter((key) => !keys.includes(key as TOmitKey))
      .map((key) => ({ [key]: obj[key] })),
  ) as {
    [P in Exclude<TKey, TOmitKey>]: TObj[P];
  };

export default objectOmit;
