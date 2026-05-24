const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const calcPercent = (item) => {
    item.marketValue = (item.marketValue * 0.9)

    return item
}

const oldCompanies = (item) => {
    const oldCompanies = (item.foundedOn > 1980) ? true : false

    return oldCompanies
}

const sumAllCompanies = (acumulador, valorAtual) => {
    return (acumulador + valorAtual.marketValue)
}


const update = companies
.map(calcPercent)
.filter(oldCompanies)
.reduce(sumAllCompanies, 0).toFixed(2)


console.log(update)