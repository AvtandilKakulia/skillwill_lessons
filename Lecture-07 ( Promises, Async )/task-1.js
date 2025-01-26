/*
1. დავუშვათ არსებობს სათამაშოების ქარხანა რომელიც ამზადებს სათამაშოს და გარკვეული შანსია რომ ეს სათამაშო იყოს დეფექტური. თუ დეფექტურია მაშინ ვაბრუნებთ, თუ ვარგისია გაგვაქვს გასაყიდად. ანუ ველოდებით დამზადების რეზულტატს და მერე ვასრულებთ მომდევნო ოპერაციას.
*/

function makeToys() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.2) {
            resolve('Undefected')
        } else {
            reject('Defected')
        }
    })
}

function sellToys(status) {
    return new Promise((resolve, reject) => {
        if (status === "Undefected") {
            if (Math.random() > 0.2) {
                resolve('Sold')
            } else {
                reject('Not Sold')
            }
        }
    })
}

makeToys()
    .then(status => sellToys(status))
    .then(res => console.log(res))
    .catch(err => console.log(err))
