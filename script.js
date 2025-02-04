// ✅ Add External ColorKit Library
// Color Kit Library
// https://codepen.io/manikoth/pen/NPKVOxm.js
// console.log(colorkit);

// Get Stuff
// const elBody = document.querySelector('body');
document.querySelector('body');

// Set variable for HTML `body` element
const elBody = document.querySelector('body');

// ✅ Check-Check: log out the `body` element in the console
// console.log(elBody);

// ✅ Check-Check: get and attach the node for the background color with `.style.backgroundColor`

// Set Stuff

// ✅ Check-Check: assign a background color to "hard code it"
// Hint: Is the color a string, number, or boolean?
elBody.style.backgroundColor = 'peachpuff';
// console.log( elBody.style.backgroundColor )

// dynamically set backgound color with `colorkit.random()` function/method
console.log( colorkit.random() );
elBody.style.backgroundColor = colorkit.random() ;

// Sparkle effect for funzies
// replace❓ with variable for the `body` element
// colorkit.sparkle( document.querySelector('body') );
colorkit.sparkle( elBody );