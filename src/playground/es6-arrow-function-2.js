const add = (a, b) => {
    //console.log(arguments);
   return a + b;
};
console.log(add(55, 2, 1001));


const user = {
   name: 'Amrutha',
   cities: ['Philadelphia', 'New York', 'Dublin'],
   printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
   }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());