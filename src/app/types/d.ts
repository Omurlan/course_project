declare module '*.module.scss';
declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';

declare const __IS_DEV__: 'true' | 'false'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T
