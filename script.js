//1: Написать функцию, которая будет принимать 2 аргумента (массив автомобилей, бренд автомобиля),
// если бренд не передали в качестве аргумента, то он должен быть Audi.
// Функция должна вернуть среднюю цену на бренд автомобиля;
// пример вызова функции const avgPriceForToyota = getAvgPrice(cars, 'Toyota');
// console.log(avgPriceForToyota) -> 35989,6667

const cars = [
    {
        brand: 'Toyota',
        model: 'Camry',
        year: '2001',
        price: 33654,
    },
    {
        brand: 'BMW',
        model: 'X5',
        year: '2003',
        price: 41820,
    },
    {
        brand: 'Audi',
        model: 'A100',
        year: '2005',
        price: 20389,
    },
    {
        brand: 'Toyota',
        model: 'Prius',
        year: '2010',
        price: 44800,
    },
    {
        brand: 'Toyota',
        model: 'Rav4',
        year: '2009',
        price: 29515,
    },
    {
        brand: 'BMW',
        model: 'X3',
        year: '2021',
        price: 54900,
    },
    {
        brand: 'BMW',
        model: 'Z-4',
        year: '2010',
        price: 45891,
    },
    {
        brand: 'Audi',
        model: 'Q8',
        year: '2022',
        price: 83500,
    },
];
