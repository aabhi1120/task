const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    boxes.forEach((b) => b.classList.remove('expanded')); // Collapse others
    box.classList.add('expanded'); // Expand clicked box

    // Optional: Add functionality for options like colors or sizes
    const options = document.createElement('div');
    options.classList.add('options');
    options.innerHTML = `
      <button onclick="changeColor('${box.className}', 'red')">Red</button>
      <button onclick="changeColor('${box.className}', 'blue')">Blue</button>
      <button onclick="changeSize('${box.className}', 'large')">Large</button>
      <button onclick="changeSize('${box.className}', 'small')">Small</button>
    `;
    box.appendChild(options);
  });
});

function changeColor(className, color) {
  const targetBox = document.querySelector(`.${className.split(' ')[1]}`);
  targetBox.style.backgroundColor = color;
}

function changeSize(className, size) {
  const targetBox = document.querySelector(`.${className.split(' ')[1]}`);
  targetBox.style.flex = size === 'large' ? 6 : 2;
}
