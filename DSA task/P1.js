//Find if a duplicate exists in a list of numbers.

const findDuplicate = (arr) => {
  const seen = {};
  for (let num of arr){
    if (seen[num])
        return [num]
    seen[num] = true;
  }
};

const data = [1, 3, 5, 2, 4, 5];
console.log(findDuplicate(data));

//Time Complexity: O(n)

