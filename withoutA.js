var array = [
  "Different",
  "Apple",
  "testing",
  "bananas",
  "quality",
  "JScript",
  "terrifying",
  "Ankara",
];
var str = array.join(" ");
var pattern = /\b(?=\w{6,})(?![Aa])[^,\sAa]+\b/g;
var matches = str.match(pattern);
console.log(matches);
