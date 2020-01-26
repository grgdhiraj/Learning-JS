/* Variable Mutation & Type Coercion */

var firstName = "John";
var age = 24;

console.log(firstName + " " + age); //Type coercion

var job, isMarried;
job = 'researcher'
isMarried = true;

console.log (firstName + ' is a ' + age + ' years old ' +  job + '.'); 
// output : John is a 24 years old researcher.
console.log ('Is John married? ' + isMarried );
// output: Is John married? true


/***************
 Variable Mutation
 */
age = 'vierentwintig';
job = 'docent';

alert( firstName + ' is ' + age + ' jaar oude ' + job +'.');

var lastName = prompt ('Wat is zijn familie naam?');
console.log('Oh by the way! Do you know ' + firstName + ' ' + lastName +'?');