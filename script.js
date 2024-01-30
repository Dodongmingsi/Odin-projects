// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


var parag= document.createElement('p');
parag.textContent="WE are the world";
parag.classList.add('parag');
container.appendChild(parag);


const bitaw = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  
//when button with id btn is clicked trigger the function call alertfunction()
//btn.addEventListener('click', alertFunction);


// buttons is a node list. It looks and acts much like an array.
const button= document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
button.forEach((button) => {

  // and for each one we add a 'click' listener
  
  button.addEventListener('click',hello);
  button.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
 
});



function hello(){
    alert("geaweea")
}