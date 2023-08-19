


//instantiate a typed constructor & create an object
// & store it in a reference variable

var typed = new Typed();

// pass two parameters to the typed constructor
// as the id name of the element adn a function with the string text
// and type speed as typespeed
var typed = new Typed('#typed-text', {
  strings: ["Welcome to the tutorials point. There are many different course on our platform. We also provide you with the tutorial for wach and every techcnology.", "incidunt quasi aperiam ipsum dolorum nisi rem inventore error voluptate? Voluptate laborum iure,. Blanditiis corporis expedita temporibus atque sit, molestiae itaque in ullam, ex pariatur incidunt quasi aperiam ipsum dolorum nisi rem inventore error voluptate? Voluptate laborum iure, dolores beatae ratione eos laboriosam velit corrupti unde praesentium quidem, minima qui cumque. Deserunt doloribus modi amet."],
  typeSpeed: 40,
  backSpeed: 10,
  loop: true
});



//click event listener to button 
const btn = document.getElementById('btn');

// ✅ Toggle button text on click

btn.addEventListener('click', function handleClick() 
{
  // each time the button is clicked check if the text is the initial text
  const initialText = 'Philosophy';

  // each time the philosophy button is clicked though it should change the body
  // of the index html page (however the header stuff remains the same)

  // if the initialtext matches change to clicked text
  if (btn.innerHTML.toLowerCase().includes(initialText.toLowerCase()))
    {
        btn.innerHTML = 'Reflections';
    } 

  // otherwise change it back to the initialtext
  else
  {
    btn.innerHTML = initialText;
  }
});

/**
 * ✅ If you need to change the button's inner HTML use:
 *  - `innerHTML` instead of `textContent`
 */
