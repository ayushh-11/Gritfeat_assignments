//Check if Two Objects Have Same Keys & Values

const sameObject = (ob1, ob2) => {
    let k1 = Object.keys(ob1);
    let k2 = Object.keys(ob1);

    if (k1.length !== k2.length)
        return false;

    for (let key of k1){
        if (ob1[key] !== ob2[key])
            return false
    }
    return true;
}

const d1 = { name: 'John', email: 'john@example.com', age: 20 };
const d2 = { name: 'John', email: 'john@example.com', age: 20 };
const d3 = { name: 'Jane', email: 'jane@example.com', age: 20 };

console.log(sameObject(d1, d2)); // true
console.log(sameObject(d1, d3)); // false

//Time Complexity : O(n)