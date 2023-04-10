import { morseToEng, engToMorse } from "./morsekeys.js";

export const engChar = (text) => {
	const checkArr = text
		.toLowerCase()
		.split("")
		.map((ch) => engToMorse[ch]);

	return checkArr.includes(undefined);
};

export const toMorse = (text) => {
	if (engChar(text)) {
		throw new Error(
			"Please enter in valid English characters that do not include the following: (~,`, <, >, {, }, |, *, ^, %)"
		);
	}
	const morseArr = text
		.toLowerCase()
		.split("")
		.map((char) => engToMorse[char])
		.join(" ");
	return morseArr;
};


export const morseChar = (text) => {
	const arrCheck = text.split(" ").map((c) => morseToEng[c]);

	return arrCheck.includes(undefined);
};

//function for translation morse to eng
export const toEng = (text) => {
	if (morseChar(text)) {
		throw new Error(
			"Please check your morse again to ensure that it is correct."
		);
	}

	const engArr = text
		.split(" ")
		.map((char) => morseToEng[char])
		.join("");
	return engArr;
};
