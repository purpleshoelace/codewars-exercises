// You'll be passed an array of objects - you must sort them in descending order based on the value of an arbitrarily specified property. For example, when sorted by a, this:

// [
//   {a: 1, b: 3},
//   {a: 3, b: 2},
//   {a: 2, b: 40},
//   {a: 4, b: 12}
// ]
// should return:

// [
//   {a: 4, b: 12},
//   {a: 3, b: 2},
//   {a: 2, b: 40},
//   {a: 1, b: 3}
// ]
// your function must take the form function sortList (sortBy, list)

// The values will always be numbers, and the properties will always exist.

function sortList (sortBy, list) {
  return list.sort(function(a,b){
    if (a[sortBy] > b[sortBy])
      return -1;
    if (a[sortBy] < b[sortBy])
      return 1;
    return 0;
  });
}

sortList('a', [
  {a: 1, b: 3},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 4, b: 12}
]);

// OR, for brevity,
// function sortList (sortBy, list) {
//   return list.sort(function(a, b) { return b[sortBy] - a[sortBy]; });
// }