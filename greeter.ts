'use strict';

interface Person {
  firstname: string;
  lastname: string;
}
function greeter(person: Person): string;
function greeter(fullname: string): string;
function greeter(firstname: string, lastname: string): string;
function greeter(person): string {
  var person, fullname;
  if ('string' === typeof person && 'string' === typeof arguments[1]) {
    fullname = person + ' ' + arguments[1];
  } else if ('string' === typeof person) {
    fullname = person;
  } else {
    fullname = person.firstname + ' ' + person.lastname;
  }

  return "Hello, " + fullname;
}

var user = {firstname: 'Yu', lastname: 'Wang'};

console.log(greeter(user));
console.log(greeter('Yu', 'Wang'));
console.log(greeter('Yu'));
