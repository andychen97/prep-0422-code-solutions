var person = {
  firstName: 'Andy',
  lastName: 'Chen',
  hobby: 'gaming'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(`The person's name is: ${fullName}.`);

person.job = 'Student';
console.log(`The person's current job is: ${person.job}.`);

person.previousJob = 'Also student';
console.log(`The person's current job is: ${person.previousJob}.`);

console.log(person);
