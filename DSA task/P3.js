//Find Common Elements Between Two Arrays

const commonElements = (arr1, arr2) =>{
    const map = {};
    const result = [];

    for (let num of arr1)
        map[num] = true
    
    for(let num of arr2){
        if (map[num])
            result.push(num)
    }
    return result;
}

const a1 = [1, 4, 2, 8, 9];
const a2 = [7, 5, 0, 4, 1];
console.log(commonElements(a1, a2));

//Time Complexity: O(n+m)