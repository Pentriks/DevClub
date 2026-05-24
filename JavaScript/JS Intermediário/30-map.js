const number = [1, 2, 3, 4, 5, 6]

const double = number.map((item, index, full) => {
    console.log(`item: ${item}, index:${index}, array completo: ${full}`)
    const newItem = item * 2 
    return newItem
})
 
console.log(double)
