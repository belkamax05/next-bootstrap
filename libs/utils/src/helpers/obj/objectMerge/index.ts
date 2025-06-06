import objectValid from '../objectValid';

const objectMerge = <TObj1, TObj2>(obj1: TObj1, obj2: TObj2): TObj1 & TObj2 => {
  const valid1 = objectValid(obj1);
  const valid2 = objectValid(obj2);
  if (!valid1 && !valid2) return {} as TObj1 & TObj2;
  if (!valid1) return obj2 as TObj1 & TObj2;
  if (!valid2) return obj1 as TObj1 & TObj2;
  return {
    ...obj1,
    ...obj2,
  };
};

export default objectMerge;
