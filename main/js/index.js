// https://bobbyhadz.com/blog/javascript-change-button-text-on-click


// forward definitions for fucntion
function updateThenDisplayPhilosophy()
{
  let text = document.getElementById("h1").innerHTML;
  document.getElementById("h1").innerHTML = text.replace("Why I reflect", "My Values");

  

}

function updateThenDisplayReflections()
{
  let text = document.getElementById("h1").innerHTML;
  document.getElementById("h1").innerHTML = text.replace("My Values", "Why I reflect");
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