interface Getter {
  get: (name: string) => string | null;
}

export const getRequired = (getter: Getter, name: string): string => {
  const value = getter.get(name);
  if (value === null) {
    throw Error(`Header ${name} missing`);
  }
  return value;
};

export const getRequiredNumber = (getter: Getter, name: string): number => {
  const value = getRequired(getter, name);
  const num = Number(value);

  if (Number.isNaN(num)) {
    throw Error(`Header ${name} is not a valid number`);
  }

  return num;
};

export const getRequiredInteger = (getter: Getter, name: string): number => {
  const value = getRequired(getter, name);
  const num = Number(value);

  if (!Number.isInteger(num)) {
    throw Error(`Header ${name} is not a valid integer`);
  }

  return num;
};
