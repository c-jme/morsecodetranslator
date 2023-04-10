import { engChar, toMorse, morseChar, toEng } from "./translator.js";

const engInput = document.querySelector("#engInput");
const morseInput = document.querySelector("#morseInput");
const engButt = document.querySelector("#engButton");
const morseButt = document.querySelector("#morseButton");
const engClearBtn = document.getElementById("clearButtonEng");
const morseClearBtn = document.getElementById("clearButtonMorse");

engButt.addEventListener("click", () => {
	if (engChar(engInput.value)) {
		return alert(
			"Please enter in valid English characters that do not include the following: (~,`, <, >, {, }, |, *, ^, %)"
		);
	}
	morseInput.value = toMorse(engInput.value);
});

engClearBtn.addEventListener("click", () => {
	engInput.value = "";
});

morseButt.addEventListener("click", () => {
	if (morseChar(morseInput.value)) {
		return alert(
			"Please check your morse again to ensure that it is correct."
		);
	}

	engInput.value = toEng(morseInput.value);
});

morseClearBtn.addEventListener("click", () => {
	morseInput.value = "";
});