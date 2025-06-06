import { Pipe, Strings } from 'hotscript';

/**
 * Lowercase string
 * @example
 * type Sample = HotLowerCase<'ABC'>;
 * ?^ 'abc'
 */
export type HotLowerCase<TValue extends string> = Pipe<TValue, [Strings.Lowercase]>;
