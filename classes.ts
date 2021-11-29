abstract class UserAccount {
  public name: string;
  protected age: number

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails(): void{
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number){
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  
  get getLevel(){
    console.log(' ---------- GET ----------');
    return this.level
  }

  set setLevel(level: number){
    this.level = level;
  }
  logCharDetails(): void{
    console.log(`The player ${this.name} is ${this.age} years old, has the char ${this.nickname} at level ${this.level}!`);
  }
}

// const ed = new UserAccount("Eduardo", 23);
// console.log(ed);
// ed.logDetails()

const john = new CharAccount("John", 30, "johnmaster", 200)
john.logCharDetails()
john.logDetails()
console.log(john.level);
john.setLevel = 499
console.log(john.getLevel);