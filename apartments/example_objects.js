//3-4 prperties per objects

const  laptop = {
    price: 1000,
    brand: 'HP',
    memory: '2GB',
    color: 'pink',
}

const car = {
    engine: 'V8',
    door: 2,
    model: 'BMW',
    price: 200000,
    make: 'M4'
}

const company = {
    name: 'Vittles',
    ceo: 'Michael Law',
    isTheBest: true,
    publicTraded: false
}

const room = {
    windows: 0,
    dimensions: '200x200',
    closet: false,
    isLegal: false,
    pets: false
}

const item = {
    name: 'Excalibur',
    attackPower: 130
}

const ally = {
    name: 'Geralt',
    power: {name: 'Kamehameha', attackPower: 9000 }
}
// to assign additional key: value pair to nested object
character.ally.power['manaCost'] = 50

const character = {
    hairColor: 'blue',
    height: "6'7",
    race: 'Elf',
    gender: null,
    strength: Infinity,
    dlc: false,
    class: 'Mage',
    cohort: '031422',
    item: item,
    ally: ally
}

console.log(character)
console.log(character.ally.power.attackPower)
//accesses the attackPower of the ally's power