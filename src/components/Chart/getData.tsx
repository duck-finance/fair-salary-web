const nextMonth = (_: any, index: number, allItems: any[]) => {
  const currentMonth = allItems.length - index;
  const currentDate = new Date();
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - currentMonth
  ).getTime();
};

const nextValue = (salary: number) => (_: any, index: number) =>
  Math.round(salary + salary * ((index / 1000) * Math.random()));

const nextPoint = (salary: number) => (
  item: any,
  index: number,
  allItems: any[]
) => ({
  x: nextMonth(item, index, allItems),
  y: nextValue(salary)(item, index),
});

export const getData = (salary: number) => {
  return new Array(15).fill(0).map(nextPoint(salary));
};
