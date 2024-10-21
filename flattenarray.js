//using array inbuild method
function flattenarray() {
  let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  let arr2 = arr.flat()
  console.log(arr2)
}
// using reduce
function flattenarray2() {
  let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  let arr2 = arr.reduce((acc, curr) => {
    return acc.concat(curr)
  }, [])
  console.log(arr2)
}
// array of object
function flattenArrayOfObjects() {
  const arr = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];

  const flattenedArr = arr.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);

  console.log(flattenedArr);
}
flattenarray();
flattenarray2();
flattenArrayOfObjects();