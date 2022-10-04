/* Created by bar1k4real on 02.10.2022. */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman(10n)).toBe(false);
  expect(convertBytesToHuman(true)).toBe(false);
  expect(convertBytesToHuman('foo')).toBe(false);
  expect(convertBytesToHuman(Symbol('id'))).toBe(false);
  expect(convertBytesToHuman(Math)).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
});

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman(-100)).toBe(false);
  expect(convertBytesToHuman(-10000)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0.00 B');
  expect(convertBytesToHuman(10)).toBe('10.00 B');
  expect(convertBytesToHuman(10000)).toBe('9.77 KiB');
  expect(convertBytesToHuman(10000000)).toBe('9.54 MiB');
  expect(convertBytesToHuman(10000000000)).toBe('9.31 GiB');
  expect(convertBytesToHuman(10000000000000)).toBe('9.09 TiB');
  expect(convertBytesToHuman(10000000000000000)).toBe('8.88 PiB');
  expect(convertBytesToHuman(10000000000000000000)).toBe('8.67 EiB');
  expect(convertBytesToHuman(10000000000000000000000)).toBe('8.47 ZiB');
  expect(convertBytesToHuman(10000000000000000000000000)).toBe('8.27 YiB');
});
