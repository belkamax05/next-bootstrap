const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

const naturalSort = <TValue extends string>(input: TValue[]) => [...input].sort(collator.compare);

export default naturalSort;
