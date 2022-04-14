const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newArray = []
  for (let i = 0; i < tutorials.length; i++) {
    const newStr = tutorials[i].split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1))
   .join(' ');
newArray.push(newStr)
  }
  return newArray;
}

titleCased()

// const titleCased = tutorials.map(tutorial);

// function tutorial(string) {
//   const str = string;
//   const arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   const str2 = arr.join(" ");
//   console.log(str2);
// }

