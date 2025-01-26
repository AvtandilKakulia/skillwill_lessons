/*
1. დავუშვათ არსებობს სათამაშოების ქარხანა რომელიც ამზადებს სათამაშოს და გარკვეული შანსია რომ ეს სათამაშო იყოს დეფექტური. თუ დეფექტურია მაშინ ვაბრუნებთ, თუ ვარგისია გაგვაქვს გასაყიდად. ანუ ველოდებით დამზადების რეზულტატს და მერე ვასრულებთ მომდევნო ოპერაციას.
*/

async function makeToys() {
    if (Math.random() > 0.2) {
        return 'Undefected'
    } else {
        return 'Defected'
    }
}

async function sellToys(status) {
    if (status === "Undefected") {
        if (Math.random() > 0.2) {
            return 'Sold'
        } else {
            return 'Not Sold'
        }
    } else {
        return 'Returned to store'
    }
}

async function promisify() {
    try {
        const status = await makeToys()
        console.log(`Toy satatus: ${status}`);

        const result = await sellToys(status)
        console.log(`Sell result: ${result}`);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

// promisify()

console.log('start');

setTimeout(() =>{
    console.log('need some time');
},1000)

console.log('end');