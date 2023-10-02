// https://bobbyhadz.com/blog/javascript-change-button-text-on-click


function replaceText(selector, target, replacement){
  const targetNode = document.querySelector(selector);
  const text = targetNode.innerText;
  targetNode.innerText = text.replace(target, replacement);
}


function updateThenDisplayValues(){

  replaceText("#favicon", "Reflections", "Values"); 

  replaceText("#h1", "Why I reflect", "Core Value : Privacy");

  replaceText("#h2", "Reflections", "Privacy respecting tools");

  replaceText("#p1", "Self-awareness is undeniably important. Instead of just blindly going through the motions, it forces me to contemplate if the activities I am spending time on are worthwhile. Additionally, self-awareness allows me to clearly track my learning progress; which naturally leads me to goal set appropriately. These takeaways will not only inform future decisions but also ensure I make the most of my current opportunities. This approach may not automatically result in profound conclusions; however with consistent effort, it helps me overcome challenges, as well as double down on personal preferences.", 
  "Oftentimes, I get questions as to why I've made my own personal laptop as well as mobile device practically unusable but to me it's the only logical option. I wasn't always like this, I used to have relatively 'normal' tech habits. However, during COVID I fell down a rabbit hole, and I haven't recovered since. I'm used to making my life 'harder' for myself, but that's simply because I've developed stubborn morals, and I feel like if I give up on them I'm giving up on a part of myself. I try to live with intention and do things a specific way because it's fufilling to me, even though it might be seen as an inconvenineince to others. One of my 'values' but I and many others would argue it's a human right is : privacy! I don't have any social media accounts, and have even chosen to abstain from Linkdin even though this will make my career more difficult than necessary; it's something I'm willing to stand by. As everything shifts to the digital realm it's practically impossible to maintain any good level of privacy if you want to participate in modern day society. As a result, I have to make some tradeoffs. I don't expect most people to take as many precautions as I have - and I know there are others who have taken even more.");
  
}

function updateThenDisplayReflections(){
  replaceText("#favicon", "Values", "Reflections");

  replaceText("#h1", "Core Value : Privacy", "Why I reflect");

  replaceText("#h2", "Privacy respecting tools", "Reflections");

  replaceText("#p1", "Oftentimes, I get questions as to why I've made my own personal laptop as well as mobile device practically unusable but to me it's the only logical option. I wasn't always like this, I used to have relatively 'normal' tech habits. However, during COVID I fell down a rabbit hole, and I haven't recovered since. I'm used to making my life 'harder' for myself, but that's simply because I've developed stubborn morals, and I feel like if I give up on them I'm giving up on a part of myself. I try to live with intention and do things a specific way because it's fufilling to me, even though it might be seen as an inconvenineince to others. One of my 'values' but I and many others would argue it's a human right is : privacy! I don't have any social media accounts, and have even chosen to abstain from Linkdin even though this will make my career more difficult than necessary; it's something I'm willing to stand by. As everything shifts to the digital realm it's practically impossible to maintain any good level of privacy if you want to participate in modern day society. As a result, I have to make some tradeoffs. I don't expect most people to take as many precautions as I have - and I know there are others who have taken even more.",
  "Self-awareness is undeniably important. Instead of just blindly going through the motions, it forces me to contemplate if the activities I am spending time on are worthwhile. Additionally, self-awareness allows me to clearly track my learning progress; which naturally leads me to goal set appropriately. These takeaways will not only inform future decisions but also ensure I make the most of my current opportunities. This approach may not automatically result in profound conclusions; however with consistent effort, it helps me overcome challenges, as well as double down on personal preferences."); 

}



//click event listener to button 
const button = document.getElementById('toggle-btn');

// toggle button text on click

//inbuilt javascript function
button.addEventListener('click', function handleClick() {
  // each time the button is clicked check if the text is the initial text
  const initialText = 'Values';

  // if the initialtext matches change to clicked text (if values (once clicked) --> change to Reflections)
  if (button.textContent.toLowerCase().includes(initialText.toLowerCase())){
      let text = updateThenDisplayValues(); // calling function - invoking it through it's name
      button.textContent = 'Reflections'; 
    } 

  // otherwise change it back to the initialtext
  else{
    let text = updateThenDisplayReflections(); 
    button.textContent = initialText;
  }

});