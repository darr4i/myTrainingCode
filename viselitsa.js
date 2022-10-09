<!DOCTYPE html>
 <html lang="en">
 <head>
	<meta charset="UTF-8">
	<title>Виселица</title>
 </head>
 <body>
	<h1>Виселица!</h1>

<script>

let words = [
	"мороженное",
	"плед",
	"колонка",
	"детерминант",
	"телевизор"
];

let word  =  words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
	answerArray[i] = " _ ";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
	alert(answerArray.join(" "));
	let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Пожалуйста, введите одну букву");
	} else {
		for ( let j = 0; j < word.length; j++) {
			if (word[j] === guess) {
			answerArray[j] = guess;
			remainingLetters--;
			}
		}
	}

}

alert (answerArray.join(" "));
alert("Победа! Было загадано слово " + word);

</script>

 </body>
 </html>
