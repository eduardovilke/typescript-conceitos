# Estudos sobre typescript

## Classes

### Types

```ts
type AccountInfo = {
  id: number;
  name: string;
  email?: string;
}

const account: AccountInfo = {
  id: 123,
  name: "Eduardo"
}
```

```ts
type Platform = 'Windows' | 'Linux' | 'Mac Os'

function handlePlatform(platform: Platform) {
  console.log(`A platform is ${platform}`);
}

handlePlatform('Linux') // WORK
handlePlatform('ios') // DONT WORK
```

### Classe simples (consigo criar objetos a partir dela)
```ts 
class UserAccount {
  name: string;
  age: string;

  contructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
```

### Classe abstrata (somente é possível criar objetos a partir de uma subclasse, pois ela é abstrata)
```ts 
abstract class UserAccount {
  name: string;
  age: string;

  contructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
```
### Modifiers

1. public (já é implícita, mas é possível chamar os atributos de qualquer lugar)
```ts 
class UserAccount {
  public name: string;

  contructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}

// Usage example
const john = new UserAccount("john");
console.log(john.name)
```

2. protected (somente é possível acessar dentro da própria classe, ou de uma subclasse )
```ts 
class UserAccount {
  protected name: string;

  contructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails (){
    console.log(`Name User Account is ${this.name}`)
  }
}

class CharAccount extends User Account {
  nickname: string;

  constructor (nickname: string, name: string){
    super(name); // GET ATTRBIUTES OF SUPERCLASS
    this.nickname = nickname;
  }

  logChar(){
    console.log(`The Char Account is ${this.nickname} of ${this.name}`) // WORK
  }
}

// Usage example
const john = new UserAccount("john");
console.log(john.name) // DON'T WORK
john.logDetails(); // WORK 
```

3. private (somente é possível acessar dentro da própria classe)
```ts
class UserAccount {
  private name: string;

  constructor(name: string){
    this.name = name;
  }

  logDetail (){
    console.log(`The name of UserAccount is ${this.name}`)
  }
}

const john = new UserAccount("John");
console.log(john.name) // DON'T WORK
john.logDetail() // WORK
```

4. readonly (somente leitura)
```ts
class UserAccount {
  readonly name: string;

  constructor(name: string){
    this.name = name;
  }
}

const john = new UserAccount("John");
console.log(john.name) // WORK
john.name = "John Doe" // DON'T WORK
```
### Accessors

1. GET
```ts
class UserAccount {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  get getName(){
    console.log(" ----- GET -----");
    return this.name;
  }
}

const john = new UserAccount("John");
john.getName();
```

2. SET
```ts
class UserAccount {
  name: string;

  constructor(name: string){
    this.name = name;
  }

  set setName(name: string){
    console.log(" ----- SET -----");
    this.name = name;
  }
}

const john = new UserAccount("John");
john.setName = "John Doe";
```
