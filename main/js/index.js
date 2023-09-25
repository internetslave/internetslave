// https://bobbyhadz.com/blog/javascript-change-button-text-on-click




function replaceText(selector, target, replacement)
{
  const targetNode = document.querySelector(selector);
  const text = targetNode.innerText;
  targetNode.innerText = text.replace(target, replacement);
}

// forward definitions for function
function updateThenDisplayPhilosophy()
{
  replaceText("#h1", "Why I reflect", "My Values");
}

function updateThenDisplayReflections()
{
  replaceText("#h1", "My Values", "Why I reflect");

}





//click event listener to button 
const btn = document.getElementById('btn');

// toggle button text on click

//inbuilt javascript function
btn.addEventListener('click', function handleClick() 
{
  // each time the button is clicked check if the text is the initial text
  const initialText = 'Philosophy';

  // if the initialtext matches change to clicked text (if Philosophy (once clicked) --> change to Reflections)
  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase()))
    {
      let text = updateThenDisplayPhilosophy(); // calling function - invoking it through it's name
      btn.textContent = 'Reflections'; 
    } 

  // otherwise change it back to the initialtext
  else
  {
    let text = updateThenDisplayReflections(); // calling function - invoking it through it's name
    btn.textContent = initialText;
  }

 
});