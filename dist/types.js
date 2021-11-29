"use strict";
// boolean (true/false)
let isOpen;
isOpen = true;
// string
let message;
message = "foo";
message = 'foo';
message = `foo ${isOpen}`;
// number
let total;
total = 123;
// array (type[])
let items;
let values;
items = [1, 2, 3];
values = [1, 2, 3];
// tuple
let title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//any (qualquer coisa) NÃO É LEGAL!!
let coisa;
coisa = true;
coisa = 1;
coisa = "foo";
coisa = ['1', 1, true];
// void
function logger() {
    console.log('Foo');
}
// null | undefined
// never
function error() {
    throw new Error('error');
}
// object
let cart;
cart = {
    key: 'fi'
};
// Type Inference
let description = "mensagem definida";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
