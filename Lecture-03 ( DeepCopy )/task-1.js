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

const foo = (obj) => {
    let result = {}
    
    for (const fn in obj){
        if(typeof obj[fn] === 'object'){
            if(Array.isArray(obj[fn])){
                result[fn] = obj[fn].map((el) => foo(el))

            }
            else{
                result[fn] = foo(obj[fn])
            }
        }
        else {
            result[fn] = obj[fn]
        }
    }
    
    return result
}

console.log(foo(person))