import { Call, Objects } from 'hotscript';
import { AnyObject } from '../AnyObject';

export type HocObjectKey<TValue extends AnyObject> = Call<Objects.Keys, TValue>;
export type HocObjectKeys<TValue extends AnyObject> = HocObjectKey<TValue>[];
