class Person {
    constructor(name = 'Anonymous', age = 'x') {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return (
            `${this.name} is ${this.age} year(s) old`
        )
    }
}
class Student extends Person {
    constructor(name = 'Anonymous', age = 'x', major) {
        super(name, age);
        this.major = major;
    }
}
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLoction() {
        return !!this.homeLocation;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasHomeLoction()) {

            description += `. He's living at ${this.homeLocation}`;
            return `Hi. ${description}`;
        }
        return `Hi. ${description}`;

    }
}
const me = new Traveler('Younes Lamkhanter', 19, 'Computer Science');
console.log(me.getDescription());
const other = new Traveler();
console.log(other.getDescription());