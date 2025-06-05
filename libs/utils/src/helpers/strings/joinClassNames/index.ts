import { ClassNameMap } from '@mui/material';
import classNames from 'classnames';

/**
 * Combine two Record<string, string> className object into one
 */
const joinClassNames = <T extends string>(...args: Partial<ClassNameMap<T>>[]) => {
  return args.reduce((acc: T, obj) => {
    Object.keys(obj || {}).forEach((key) => {
      if (!obj[key]?.length) return;
      (acc as ClassNameMap<T>)[key] = classNames(acc[key], obj[key]);
    });
    return acc;
  }, {} as never) as ClassNameMap<T>;
};

export default joinClassNames;
