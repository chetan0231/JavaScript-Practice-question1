const arr = [9, 2, 3, 2, 6, 6];

const findFirstUnique = (arr) => {
  const uniqueArr = arr.filter((element) => {
    return arr.indexOf(element) === arr.lastIndexOf(element);
  });

  if (uniqueArr.length === 0) {
    console.log("No Unique Element Found !");
  } else {
    console.log(uniqueArr[0]);
  }
};

findFirstUnique(arr);

// rightRotate

const arr = [1, 2, 3, 4, 6];

function rightRotate(arr, n) {
  const newarr = arr.splice(n - 1);
  return (arr = newarr.concat(arr));
}
console.log(rightRotate(arr, 2));
