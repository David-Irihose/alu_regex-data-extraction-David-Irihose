const fs = require("fs");

// Here is the section of reading input from the .txt file
const rawText = fs.readFileSync("sample_input.txt", "utf8");

// This is the Regex patterns to match the input
const emailRegex = /\b[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,10}\b/g;
const urlRegex = /\bhttps?:\/\/[^\s]+/g;
const phoneRegex = /(?:\+250|0)7\d{8}/g;
const creditCardRegex = /\b(?:\d{4}[- ]?){3}\d{4}\b/g;
const timeRegex = /\b(?:1[0-2]|0?[1-9]):[0-5]\d\s?(?:AM|PM)\b|\b(?:[01]?\d|2[0-3]):[0-5]\d\b/gi;

const extract = (regex, text) => text.match(regex) || [];
// masking Card digits
const maskCard = (card) => {
  const digits = card.replace(/\D/g, "");
  return card.replace(/\d/g, (d, i) =>
    i < digits.length - 4 ? "*" : d
  );
};
// This is output section wherE to Extract all input from txt file
const output = {
  emails: extract(emailRegex, rawText),
  urls: extract(urlRegex, rawText),
  phones: extract(phoneRegex, rawText),
  creditCards: extract(creditCardRegex, rawText).map(maskCard),
  times: extract(timeRegex, rawText)
};
// Saving the output to JSON file
console.log(JSON.stringify(output, null, 2));
fs.writeFileSync("sample_output.json", JSON.stringify(output, null, 2));
