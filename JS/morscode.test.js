export const engTestErr = new Error(
  "Check that your characters are valid and do not include (~, `, <, >, {, }, |, *, ^, %)"
);
export const morseTestErr = new Error(
  "Please check your morse again to ensure that it is correct."
);


import { engChar, toMorse, morseChar, toEng } from "./translator.js";


describe('Checks for text to morse', () => {
  it('Returns expected english-to-morse translations, including spaces, certain special characters, and numbers.', () => {
    expect(toMorse("Bananas", text)).toBe(
      "-... .- -. .- -. .- ..."
    );
    expect(toMorse("This is a space", text)).toBe(
      "- .... .. ... / .. ... / .- / ... .--. .- -.-. ."
    );
    expect(toMorse("555", text)).toBe(
      "..... ..... ....."
    );
  });

  it('Returns error when invalid characters are entered in english input field', () => {
    expect(engChar('<', text)).toBe(
      "Please enter in valid English characters that do not include the following: (~,`, <, >, {, }, |, *, ^, %)"
    );
    expect(engChar('b%a%n%anas', text)).toBe(
      "Please enter in valid English characters that do not include the following: (~,`, <, >, {, }, |, *, ^, %)"
    );
  })
});



describe('Checks for morse to text', () => {
  it('Returns expected result from morse-to-english', () => {
    expect(toEng('-.-- . ...', text)).toBe(
      "yes"
    );
    expect(toEng('.... --- .-.. -.-- / -... .- -. .- -. .- ...', text)).toBe(
      "holy bananas"
    );
    expect(toEng('.---- ..--- ...-- ....-')).toBe(
      "1234"
    );
  });

  it('Returns error when invalid characters are entered in the morse input field', () => {
    expect(morseChar())
  })
});