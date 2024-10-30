function clearNumber(value = '') {
  return value.replace(/\D+/g, '');
}

export function formatExpirationDate(value: string) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}

export function limitarCaracteres(input: HTMLInputElement, maxLength: number) {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
  }
}
