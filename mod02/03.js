let dogs = 6;
const names = [];
let k = 0;

const resultsElm = document.getElementById('target1');
const ulElem = document.createElement('ul');
resultsElm.append(ulElem)

while (names.length < dogs) {
    let ask_names = prompt('Input dog names:');
    names[k] = ask_names;
    k += 1;
}
names.sort().reverse();
for (let name of names) {
    console.log(`Name: ${name}`);
    const liElem = document.createElement('li');
    liElem.innerText = 'Name: ' + name;
    ulElem.append(liElem);
}