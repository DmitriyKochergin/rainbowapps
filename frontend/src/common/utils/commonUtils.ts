import { isEqual, mergeWith, toLower, trim } from 'lodash';

export const isDev = (): boolean => !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
export const compareByParams = <T>(a: T, b: T, param: keyof T): number => (a[param] > b[param] ? 1 : -1);
export const compareByDate = (a: Date | string, b: Date | string): number => new Date(b).getTime() - new Date(a).getTime();
export const compareIgnoringCase = (a: string, b: string): number => (a.toLowerCase() > b.toLowerCase() ? 1 : -1);

export const deepCompareObj = <T extends CommonObj, U extends CommonObj>(oldObj: T, newObj: U): CommonObj => {
  const updatedObj: CommonObj = {};
  mergeWith(oldObj, newObj, (objectValue, sourceValue, key) => {
    if (!(isEqual(objectValue, sourceValue)) && (Object(objectValue) !== objectValue)) {
      updatedObj[key] = sourceValue;
    }
  });
  return updatedObj;
};

export const getFirstCharacterFromString = (val: string): string => val.charAt(0).toUpperCase();

export const normalizeStrForSearch = (val: string): string => trim((toLower(val)));
