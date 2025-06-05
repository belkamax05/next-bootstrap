import { AnyObject } from '@/types';
import objectValid from '../objectValid';

/**
 * constructs new object with subset of original object properties including only 'keys'
 * @param obj object to take properties from
 * @param keys list of properties to be taken from 'obj'
 * @returns obj subset
 */
const objectPick = <TObj extends AnyObject, TKey extends keyof TObj>(obj: TObj, keys: TKey[]) =>
  !objectValid(obj)
    ? obj
    : (Object.assign(
        {},
        ...keys.filter((key) => key in obj).map((key) => ({ [key]: obj[key] })),
      ) as {
        [Key in TKey]: TObj[Key];
      });

export default objectPick;
