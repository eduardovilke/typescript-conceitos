// boolean (true/false)
let isOpen: boolean
isOpen = true

// string
let message: string
message = "foo"
message = 'foo'
message = `foo ${isOpen}`

// number
let total: number
total = 123

// array (type[])
let items: number[]
let values: Array<number>
items = [1, 2, 3]
values = [1, 2, 3]

// tuple
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors{
  white = '#fff',
  black = '#000'
}

//any (qualquer coisa) NÃO É LEGAL!!
let coisa: any
coisa = true
coisa = 1
coisa = "foo"
coisa = ['1', 1, true]

// void
function logger(): void{
  console.log('Foo');
}

// null | undefined

// never
function error(): never {
  throw new Error('error');
}

// object
let cart: object

cart = {
  key: 'fi'
}

// Type Inference
let description = "mensagem definida";

window.addEventListener("click", (e) => {
  console.log(e.target);
});

