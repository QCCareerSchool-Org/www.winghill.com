interface HeadersList {
  get: (name: string) => string | null;
}

export const getRequiredHeader = (headersList: HeadersList, name: string): string => {
  const value = headersList.get(name);
  if (value === null) {
    throw Error(`Header ${name} missing`);
  }
  return value;
};

export const getRequiredNumberHeader = (headersList: HeadersList, name: string): number => {
  const value = getRequiredHeader(headersList, name);
  const num = Number(value);

  if (Number.isNaN(num)) {
    throw Error(`Header ${name} is not a valid number`);
  }

  return num;
};
