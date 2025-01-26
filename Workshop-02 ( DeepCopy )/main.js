const person = {
    name: 'James',
    address: {
        tbilisi: {
            district: {
                street: 'Tamarashvili'
            }
        }
    },
    friends: [
        {closefriend: {name: 'Dodo'}},
        {closefriend: {name: 'Kurzu'}}
        ]
}

function deepCopy(obj){
    if(obj === null || typeof obj !== 'object') return obj
    if(Array.isArray(obj)) return obj.map(deepCopy)
    
    const copy = {}

    for (const key in obj) {
        copy[key] = deepCopy(obj[key])
    }

    return copy
}

console.log(deepCopy(person));
person.friends[0].closefriend.name = 'gulua'
console.log(person);