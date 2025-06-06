// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DeepPartial<T> = T extends Record<string, any>
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
