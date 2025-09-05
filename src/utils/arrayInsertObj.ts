export function arrayInsertObj<T extends { id: number }>(
  newItem: T,
  index: number,
  items: T[]
) {
  const start = items.slice(0, index);
  const end = items.slice(index);
  return [...start, newItem, ...end];
}
