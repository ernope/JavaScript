let ask_how_many = prompt('Number of participants?')
const names = [];
let k = 0;

const resultsElm = document.getElementById('target1');
const ulElem = document.createElement('ol');
resultsElm.append(ulElem)

while (names.length < ask_how_many) {
    let ask_names = prompt('Input participant names:');
    names[k] = ask_names;
    k += 1;
}
for (let name of names) {
    console.log(`Name: ${name}`);
    const liElem = document.createElement('li');
    liElem.innerText = 'Name: ' + name;
    ulElem.append(liElem);
}