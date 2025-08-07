//Group by Category

const groupByCategory = (products) => {
    let grouped = {}

    for (let item of products){
        const key = item.categoryId;
        if(!grouped[key])
            grouped[key] = [];
        grouped[key].push(item);
    }
    
    return grouped
}

const products = [
  { id: 1, name: 'Phone', categoryId: 2 },
  { id: 2, name: 'Shirt', categoryId: 1 },
  { id: 3, name: 'Charger', categoryId: 2 }
];
console.log(groupByCategory(products));

//Time Complexity : O(n)