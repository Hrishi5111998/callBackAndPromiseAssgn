function ageInDays(person){
  const daysInYear = 365
  const fullName = `${person.firstName} ${person.lastName} `
  const ageInDays = person.age * daysInYear

  return function logs(){
    console.log(`The person's full name is ${fullName}and their age in days is ${ageInDays}`);
  }
}

let myPerson = {
    firstName: 'joe',
    lastName: 'hart',
    age: 25
}
const result = ageInDays(myPerson)
result()