function checkPalindroma(parola) {
    let palindroma = parola.split('').reverse().join('');
    console.log(palindroma);
    console.log(parola);
    if (palindroma.toLowerCase() === parola.toLowerCase()) {
      return true;
    }
    return false;
  }
  
  let word = prompt('Inserire una parola');
  let check = checkPalindroma(word);
  if (check) {
    console.log('La parola è palindroma');
  } else {
    console.log('La parola non è palindroma');
  }

//   tolowercase perchè se la parola inizia con la maiuscola, js non la riconosce come palindroma