const numbers = [];
let k = 0;
while (numbers.length < 5) {
    let ask_num = prompt('Input nums:');
    numbers[k] = ask_num;
    k += 1;
}
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(`Name: ${numbers[i]}`);
}