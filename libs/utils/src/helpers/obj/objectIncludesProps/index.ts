import { AnyObject } from '@/types';
import objectValid from '../objectValid';

const objectIncludesProps = <TObject extends AnyObject, TKey extends keyof TObject>(
  obj: TObject,
  keys: TKey[],
) => {
  if (!objectValid(obj)) return false;
  const objKeys = Object.keys(obj) as TKey[];
  return keys.every((key) => objKeys.includes(key));
};

export default objectIncludesProps;
