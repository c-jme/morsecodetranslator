export const engTestErr = new Error(
  "Check that your characters are valid and do not include (~, `, <, >, {, }, |, *, ^, %)"
);
export const morseTestErr = new Error(
  "Please check your morse again to ensure that it is correct."
);


import { engChar, toMorse, morseChar, toEng } from "./translator.js";


describe('Checks for text to morse', () => {
  it('Returns expected english-to-morse translations.', () => {
    expect(toMorse("Bananas", text)).toBe(
      "-... .- -. .- -. .- ..."
    );
  })
})