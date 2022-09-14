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

//2: Написать функцию, которая принимает конфиг табов, отрисовывает табы в доме.
// У табов должно быть 2 состояния активный и не активный то есть один таб будет активный, по которому кликнули,
// отсальные соответственно не активны.
// если у таба включена опция showAttentionStar то в правом верхнем углу таба нужно отобразить иконку звездочки
// (какую-то svg) типа чтобы привлечь внимание пользователя, звездочка должна вращаться вокруг своей оси пока по этому
// табу не кликнул пользователь;

const config = [
    {
        id: 'bathroom-tab',
        title: 'bathroom',
    },
    {
        id: 'office-tab',
        title: 'office',
        showAttentionStar: 'true',
    },
    {
        id: 'living-room-tab',
        title: 'living room',
    },
    {
        id: 'kitchen-tab',
        title: 'kitchen',
        showAttentionStar: 'true',
    },
];
