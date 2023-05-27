let choice = prompt('Scegli "pari" o "dispari"');
let number = parseInt(prompt('Scegli un numero compreso tra 1 e 5'));

while (choice !== 'pari' && choice !== 'dispari') {
    choice = prompt('Inserisci nuovamente la parola chiave "pari" o "dispari"');
}

while (isNaN(number) || number < 1 || number > 5) {
    number = parseInt(prompt('Inserisci nuovamente il numero'));
}

function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function checkOddEven(num) {
    return num % 2 === 0;
}

let pc_number = randomNumber();

let sum = pc_number + number;

let check_odd_even = checkOddEven(sum);
console.log(check_odd_even);

if (check_odd_even) {
    console.log('Vincitore: Utente');
} else {
    console.log('Vincitore: Computer');
}

