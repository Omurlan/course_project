declare module '*.module.scss';
declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';

declare const __IS_DEV__: 'true' | 'false'
declare const __API__: string
declare const __ENVIRONMENT__: 'jest' | 'web'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}
