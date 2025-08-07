//Filter items based on allowed keys

const filterData = ( data, allowedKeys) => {
    const map = {};
    for(let key of allowedKeys)
        map[key] = true;

    return data.filter(item => map[item.key])
}

const data = [
  { key: 'name', value: 'John' },
  { key: 'email', value: 'john@example.com' },
  { key: 'age', value: 20 },
];
const allowedKeys = ['name', 'age'];
console.log(filterData(data, allowedKeys));

//Time Complexity: O(n+m)