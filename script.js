// ✅ Add External ColorKit Library
// Color Kit Library
// https://codepen.io/manikoth/pen/NPKVOxm.js

// Get Stuff

// Set variable for HTML `body` element

// ✅ Check-Check: log out the `body` element in the console

// ✅ Check-Check: get and attach the node for the background color with `.style.backgroundColor`

// Set Stuff

// ✅ Check-Check: assign a background color to "hard code it"
// Hint: Is the color a string, number, or boolean?

// dynamically set backgound color with `colorkit.random()` function/method

// Sparkle effect for funzies
// replace❓ with variable for the `body` element
// colorkit.sparkle( ❓);

console.log(colorkit);

// Sparkle function
const sparkle = (element) => {
  // Set the position of the element to relative
  element.style.position = "relative";

  // Create a container div for the sparkles
  const sparkleContainer = document.createElement("div");
  sparkleContainer.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                pointer-events: none;
            `;
  element.appendChild(sparkleContainer);

  // Periodically add sparkle stars
  setInterval(() => {
    const star = document.createElement("div");
    const size = Math.random() * 24 + 12; // Random size between 12px and 36px
    star.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: white;
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: twinkle 0.8s linear forwards;
                `;
    sparkleContainer.appendChild(star);

    // Remove star after animation is complete
    setTimeout(() => star.remove(), 800);
  }, 50); // Add a new sparkle every 50ms
};

// Call sparkle effect on the body element
sparkle(document.body); // You can replace document.body with any specific element

// Function to generate complementary color
const complement = (color) => {
  // Remove the '#' from the hex code
  const hex = color.replace("#", "");
  if (hex.length !== 6) {
    throw new Error(
      "Invalid hex color format. Expected 6-character hex color."
    );
  }

  // Convert the hex color to RGB components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the complementary color by subtracting each RGB component from 255
  const compR = 255 - r;
  const compG = 255 - g;
  const compB = 255 - b;

  // Convert the complementary RGB components back to a hex color string
  const complementColor =
    "#" +
    compR.toString(16).padStart(2, "0") +
    compG.toString(16).padStart(2, "0") +
    compB.toString(16).padStart(2, "0");

  return complementColor;
};

// Set a random base color
const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

// Function to set background color based on complementary color
const setBackgroundColor = () => {
  // Pick a random color from the predefined colors
  const baseColor = getRandomColor();

  // Get the complementary color of the base color
  const complementaryColor = complement(baseColor);

  // Set the background color of the page to the complementary color
  document.body.style.backgroundColor = complementaryColor;

  // Log the colors to the console (for debugging)
  console.log(`Base Color: ${baseColor}`);
  console.log(`Complementary Color: ${complementaryColor}`);
};

// Call the function to set the background color on page load
setBackgroundColor();
