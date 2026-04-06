const paragraph = document.querySelector('p');
paragraph.textContent = 'This is the new text for the paragraph.';

const element = document.querySelector('#main');
element.placeholder = 'Enter your name here';

console.log(element.placeholder); // Output: Enter your name here