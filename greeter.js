'use strict';
function greeter(person) {
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

var user = { firstname: 'Yu', lastname: 'Wang' };

console.log(greeter(user));
console.log(greeter('Yu', 'Wang'));
console.log(greeter('Yu'));
