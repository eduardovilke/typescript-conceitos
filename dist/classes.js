"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        console.log(' ---------- GET ----------');
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} years old, has the char ${this.nickname} at level ${this.level}!`);
    }
}
// const ed = new UserAccount("Eduardo", 23);
// console.log(ed);
// ed.logDetails()
const john = new CharAccount("John", 30, "johnmaster", 200);
john.logCharDetails();
john.logDetails();
console.log(john.level);
john.setLevel = 499;
console.log(john.getLevel);
