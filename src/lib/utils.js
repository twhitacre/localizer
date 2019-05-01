export const validate = (data, language) => {
  const count = { total: 0, complete: 0, incompleteData: [] };

  Object.keys(data).forEach(key => {
    if (data[key][language]) {
      count.complete += 1;
    } else {
      count.incompleteData.push(key);
    }
    count.total += 1;
  });

  count.percent = Math.floor((count.complete * 100) / count.total);
  console.log('COUNT', count);
  return count;
};

export const filterObj = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
