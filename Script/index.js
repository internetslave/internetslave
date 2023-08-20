




// site used - https://bobbyhadz.com/blog/javascript-change-button-text-on-click
// Toggle button text on Click using JavaScript

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
