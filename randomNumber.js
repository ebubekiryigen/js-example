let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
  guess = parseInt(prompt("1 ile 100 arasında bir sayı tuttum. Tahminin nedir?"));

  if (guess < randomNumber) {
    alert("Daha yüksek bir sayı dene.");
  } else if (guess > randomNumber) {
    alert("Daha düşük bir sayı dene.");
  }
} while (guess !== randomNumber);

alert("Tebrikler, doğru sayıyı buldunuz!");