const fs = require("fs");

//realistic raw input
const rawText = fs.readFileSync("sample_input.txt", "utf8");

// ==REGEX PATTERNS

// Email Regex
const emailRegex = /\b[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,10}\b/g;

// URL or Links REgex
const urlRegex = /\bhttps?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}(\/[^\s]*)?\b/g;

// Rwandan phone numbers REgex
// Rwandan phone numbers: 078 XXX XXXX or +250 78 XXX XXXX
const phoneRegex = /(?:\+250\s?|0)7\d{2}\s+\d{3}\s+\d{4}/g;



// Credit cards ( with 16 digits with spaces or dashes)
const creditCardRegex = /\b(?:\d{4}[- ]?){3}\d{4}\b/g;

// Time (24-hour OR 12-hour with AM/PM)
const timeRegex =
/\b(?:1[0-2]|0?[1-9]):[0-5]\d\s?(?:AM|PM)\b|\b(?:[01]?\d|2[0-3]):[0-5]\d\b/gi;


// EXTRACTING

const extract = (regex, text) => text.match(regex) || [];

// Mask credit cards for security
const maskCard = (card) => {
  const digits = card.replace(/\D/g, "");
  return card.replace(/\d/g, (d, i) =>
    i < digits.length - 4 ? "*" : d
  );
};


// == OUTPUT 

const output = {
  emails: extract(emailRegex, rawText),
  urls: extract(urlRegex, rawText),
  phones: extract(phoneRegex, rawText),
  creditCards: extract(creditCardRegex, rawText).map(maskCard),
  times: extract(timeRegex, rawText)
};

console.log(JSON.stringify(output, null, 2));
fs.writeFileSync("sample_output.json", JSON.stringify(output, null, 2));
