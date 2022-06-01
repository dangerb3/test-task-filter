// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filter = (range, source) => {
  const correctedUpRange = (number) =>
    number === null ? Number.MAX_VALUE : number;

  const lowRangeFilter = source.filter(
    (element) =>
      element.prices[0] >= range[0] &&
      element.prices[0] <= correctedUpRange(range[1])
  );
  const upRangeFilter = lowRangeFilter.filter(
    (element) =>
      correctedUpRange(element.prices[1]) <= correctedUpRange(range[1])
  );

  return upRangeFilter;
};

console.log("requiredRange1", requiredRange1, filter(requiredRange1, courses));
console.log("requiredRange2", requiredRange2, filter(requiredRange2, courses));
console.log("requiredRange3", requiredRange3, filter(requiredRange3, courses));
