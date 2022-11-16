//const numbers = [];
//let ask_num = prompt('Input nums:');
//for (let i = 0; i < numbers.length; i++) {
//    console.log(`Name: ${numbers[i]}`);
//}
//document.querySelector('#target1').innerHTML = "Numerot: "+numbers;

const numbers = [1,2,3,4,"kutonen", false,['toinen', 'taulukko']];
const numbers2 = [8,9,11,89]
numbers2[1] = 19;

console.log('Taulukon toinen arvo:',numbers[1])
numbers2.push('kolmonen');
const lastItem = numbers2.pop();

console.log('numbers2', numbers2);
console.log('lastItem',lastItem)

for (let i = 0; i < numbers2.length; i++){ // python: len(numbers2)
    console.log('alkion', i, 'arvo', numbers2[i])
}

for (const number of numbers2) {
    console.log('alkion', 'arvo on', number);
}

numbers2.push(9);
// sisältääkö taulukko arvon 9?
const includes9 = numbers2.includes(9);
console.log('onko ysiä?', includes9);
//järjestetään taulukko
numbers2.sort((a,b) => a-b);
console.log(numbers2);


const student = {
  firstName: 'Greg',
  lastName: 'Focker',
  studentId: '234359',
  phone: '040 5902123',
}
console.log('student', student);
console.log('opiskelijan nimi:', student.firstName, student.lastName)
const key = 'firstName'; // speciaalitapaus,
console.log('opiskelijan nimi:',student[key], student['lastName']);

delete student.firstName;
console.log('student', student);
student.nickName = 'GF';
console.log('student', student);
student.numbers = numbers2;
console.log('student', student);

