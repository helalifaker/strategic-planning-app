import Decimal from 'decimal.js';

export function toDecimal(value: number | string | null | undefined): Decimal {
  if (value === null || value === undefined) return new Decimal(0);
  if (typeof value === 'string') return new Decimal(value);
  return new Decimal(value);
}

export function createZeroArray(length: number): Decimal[] {
  return new Array(length).fill(0).map(() => new Decimal(0));
}

export function createYearArray(startYear: number, endYear: number): number[] {
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
}

export function sum(array: Decimal[]): Decimal {
  return array.reduce((acc, val) => acc.plus(val), new Decimal(0));
}

export function decimalArrayToStrings(array: Decimal[]): string[] {
  return array.map(val => val.toFixed(2));
}