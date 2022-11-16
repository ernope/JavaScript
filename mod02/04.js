//Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)
const nums = [];
let k = 0;

const resultsElm = document.getElementById('target1');
const ulElem = document.createElement('ul');
resultsElm.append(ulElem)
let ask_nums = '';
while (ask_nums !== '0') {
    ask_nums = prompt('Input numbers:');
    nums[k] = ask_nums;
    k += 1;
}
nums.sort().reverse();
for (let number of nums) {
    console.log(`Name: ${number}`);
    const liElem = document.createElement('li');
    liElem.innerText = 'Number: ' + number;
    ulElem.append(liElem);
}

//tulostaa consoliin ja sivulle