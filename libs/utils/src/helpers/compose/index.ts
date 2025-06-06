import capitaliseFirstLetter from '../strings/capitaliseFirstLetter';
import formatWithNoSpaces from '../strings/formatWithNoSpaces';
import formatWithSpaces from '../strings/formatWithSpaces';
import splitString from '../strings/splitString';

/* eslint-disable @typescript-eslint/no-explicit-any */
function compose(...fns: ((...any) => any)[]): any {
  return (...args: any[]) => {
    return fns.reduceRight((arg: any, f: (...any) => any) => {
      return Array.isArray(arg) ? f(...arg) : f(arg);
    }, args);
  };
}

const composeCapitaliseFirstNoSpacesSplit = compose(
  formatWithNoSpaces,
  capitaliseFirstLetter,
  splitString,
);

const composeCapitaliseFirstWithSpacesSplit = compose(
  formatWithSpaces,
  capitaliseFirstLetter,
  splitString,
);

const composeCapitaliseFirstWithSpaces = compose(formatWithSpaces, capitaliseFirstLetter);

export {
  composeCapitaliseFirstNoSpacesSplit,
  composeCapitaliseFirstWithSpacesSplit,
  composeCapitaliseFirstWithSpaces,
  compose,
};
