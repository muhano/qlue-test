function improveArray(array) {
    let result = {h: [], d: []}
    let tempArray = []
    
    for (const key in array[0]) {
        result.h.push(key)
    }

    for (let i = 0; i < array.length; i++) {
        tempArray = []
        for (const key in array[i]) {
            // console.log(array[i][key]);
            tempArray.push(array[i][key])
        }
        result.d.push(tempArray)
    }

    return result
}

const array = [
  { username: "ali", hair_color: "brown", height: 1.2 },
  { username: "marc", hair_color: "blue", height: 1.4 },
  { username: "joe", hair_color: "brown", height: 1.7 },
  { username: "zehua", hair_color: "black", height: 1.8 },
];

console.log(improveArray(array)); 
