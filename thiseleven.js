class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function createPerson(name, age) {
    return new Person(name, age);
}

const person1 = createPerson("Ahmet", 30);
const person2 = createPerson("Ayşe", 25);
