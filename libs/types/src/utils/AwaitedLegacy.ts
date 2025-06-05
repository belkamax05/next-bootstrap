export type AwaitedLegacy<T> = T extends PromiseLike<infer U> ? U : T;
