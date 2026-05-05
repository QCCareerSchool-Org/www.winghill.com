interface HeadersList {
  get: (n: string) => string | null;
}

export const getRequiredHeader = (headersList: HeadersList, name: string): string => {
  const header = headersList.get(name);
  if (header === null) {
    throw Error(`Header ${name} missing`);
  }
  return header;
};
