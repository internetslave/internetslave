
/* INDEX PAGE TOGGLE BTN / CONTENT */
function replaceText(selector, replacement) {
  const targetNode = document.querySelector(selector);
  if (targetNode) {
      targetNode.innerText = replacement;
  } else {
      console.error(`Failed to replace ${selector}: No element matching the selector exists.`)
  }
}

function replaceButtons(){ /* REPLACE COLUMN BUTTONS DEPENDING ON TOGGLE BUTTON*/
  const hideReflections = document.querySelector(".reflection-btns");
  const hideTools = document.querySelector(".tools-btns");
  hideReflections.classList.toggle("hide");
  hideTools.classList.toggle("hide");
}

function updateThenDisplayValues() {
  replaceText("#favicon", "Values");
  replaceText("#col-head-1", "Core Value : Privacy");
  replaceText("#col-head-2", "Privacy respecting tools");
  replaceText("#justification-para", "Oftentimes, I get questions as to why I've made my own personal laptop as well as mobile device practically unusable but to me it's the only logical option. I wasn't always like this, I used to have relatively 'normal' tech habits. However, during COVID I fell down a rabbit hole, and I haven't recovered since. I'm used to making my life 'harder' for myself, but that's simply because I've developed stubborn morals, and I feel like if I give up on them I'm giving up on a part of myself. I try to live with intention and do things a specific way because it's fufilling to me, even though it might be seen as an inconvenineince to others. One of my 'values' but I and many others would argue it's a human right is : privacy! I don't have any social media accounts, and have even chosen to abstain from Linkdin even though this will make my career more difficult than necessary; it's something I'm willing to stand by. As everything shifts to the digital realm it's practically impossible to maintain any good level of privacy if you want to participate in modern day society. As a result, I have to make some tradeoffs. I don't expect most people to take as many precautions as I have - and I know there are others who have taken even more.");
  replaceButtons();
}

function updateThenDisplayReflections() {
  replaceText("#favicon", "Reflections");
  replaceText("#col-head-1", "Why I reflect");
  replaceText("#col-head-2", "Reflections");
  replaceText("#justification-para", "Self-awareness is undeniably important. Instead of just blindly going through the motions, it forces me to contemplate if the activities I am spending time on are worthwhile. Additionally, self-awareness allows me to clearly track my learning progress; which naturally leads me to goal set appropriately. These takeaways will not only inform future decisions but also ensure I make the most of my current opportunities. This approach may not automatically result in profound conclusions; however with consistent effort, it helps me overcome challenges, as well as double down on personal preferences.");
  replaceButtons();
}

const toggleButtons = document.querySelectorAll('#toggle-btn > input'); //click event listener to button
console.log(toggleButtons);

for (const btn of toggleButtons) {
  btn.addEventListener('click', () => {
      if (document.querySelector('input[name="toggle"]:checked').value === 'Values') {
          updateThenDisplayValues();
      } else {
          updateThenDisplayReflections();
      }
  });
}


/* SUBPAGE CONTENT */


const h2 = document.querySelector(".column>h2");
const container = document.querySelector(".subpage-btns"); 
const subpagePara = document.getElementById('para');

const options = [ 'Description', 'Justification', 'Lessons Learned', 'Goals' ];

let currentOption = 'Description'; // default option


function updatePara(updatedPara) {
  subpagePara.textContent = updatedPara;
}

renderButtons = () => {

	const currentOptions = options.filter(o => o !== currentOption);

	container.innerHTML = '';

	currentOptions.forEach(opt => {
  
  	const subpageBtn = document.createElement('btn');
    subpageBtn.textContent = opt;

    subpageBtn.addEventListener('click', () => {
      selectHeader(opt);

      const sections = {

        
        "Description": {
          // location path name(not relative path) - string object property name
          // object property name must match the location path name for the page calling the function
          "/reflection-subpages/lead-mentor.html" : "Description text for cert.",
          "/reflection-subpages/code-dojo.html": "Description text for code.",
          "/reflection-subpages/course-rep.html": "Description text for course.",
          "/reflection-subpages/grads4nottm.html": "Description text for grads.",
          "/reflection-subpages/it-support.html": "Description text for it.",
          "/reflection-subpages/library-mentor.html": "Description text for library.",
          "/reflection-subpages/achievement.html": "Description text for outreach.",
          "/reflection-subpages/this-website.html": "Description text for website.",
          "/reflection-subpages/trinity.html": "Description text for trinity.",

          "/tools-subpages/arch.html": "Description text for arch.",
          "/tools-subpages/graphene.html": "Description text for graph.",
          "/tools-subpages/monero.html": "Description text for xmr.",
          "/tools-subpages/pi-hole.html": "Description text for pi.",


        },
        "Justification": {
          "/reflection-subpages/lead-mentor.html": "Justification text for cert.",
          "/reflection-subpages/code-dojo.html": "Justification text for code.",
          "/reflection-subpages/course-rep.html": "Justification text for course.",
          "/reflection-subpages/grads4nottm.html": "Justification text for grads.",
          "/reflection-subpages/it-support.html": "Justification text for it.",
          "/reflection-subpages/library-mentor.html": "Justification text for library.",
          "/reflection-subpages/achievement.html": "Justification text for outreach.",
          "/reflection-subpages/this-website.html": "Justification text for website.",
          "/reflection-subpages/trinity.html": "Justification text for trinity.",


          "/tools-subpages/arch.html": "Justification text for arch.",
          "/tools-subpages/graphene.html": "Justification text for graph.",
          "/tools-subpages/monero.html": "Justification text for xmr.",
          "/tools-subpages/pi-hole.html": "Justification text for pi.",

        },

        "Lessons Learned": {
          "/reflection-subpages/lead-mentor.html": "Lessons text for cert.",
          "/reflection-subpages/code-dojo.html": "Lessons text for code.",
          "/reflection-subpages/course-rep.html": "Lessons text for course.",
          "/reflection-subpages/grads4nottm.html": "Lessons text for grads.",
          "/reflection-subpages/it-support.html": "Lessons text for it.",
          "/reflection-subpages/library-mentor.html": "Lessons text for library.",
          "/reflection-subpages/achievement.html": "Lessons text for outreach.",
          "/reflection-subpages/this-website.html": "Lesssons text for website.",
          "/reflection-subpages/trinity.html": "Lessons text for trinity.",


          "/tools-subpages/arch.html": "Lessons text for arch.",
          "/tools-subpages/graphene.html": "Lessons text for graph.",
          "/tools-subpages/monero.html": "Lessons text for xmr.",
          "/tools-subpages/pi-hole.html": "Lessons text for pi.",
        },

        "Goals": {
          "/reflection-subpages/lead-mentor.html": "Goals text for cert.",
          "/reflection-subpages/code-dojo.html": "Goals text for code.",
          "/reflection-subpages/course-rep.html": "Goals text for course.",
          "/reflection-subpages/grads4nottm.html": "Goals text for grads.",
          "/reflection-subpages/it-support.html": "Goals text for it.",
          "/reflection-subpages/library-mentor.html": "Goals text for library.",
          "/reflection-subpages/achievement.html": "Goals text for outreach.",
          "/reflection-subpages/this-website.html": "Goals text for website.",
          "/reflection-subpages/trinity.html": "Goals text for trinity.",


          "/tools-subpages/arch.html": "Goals text for arch.",
          "/tools-subpages/graphene.html": "Goals text for graph.",
          "/tools-subpages/monero.html": "Goals text for xmr.",
          "/tools-subpages/pi-hole.html": "Goals text for pi.",

        },

      };

      const pathName = Object.keys(sections[currentOption || "Description"]).find(path => location.pathname.endsWith(path));
      updatePara(sections[currentOption][pathName]  || sections["Description"][pathName]);

    });

		container.append(subpageBtn); // elements appear where you append them
  });
	
};

const selectHeader = option => {

	currentOption = option;
  h2.textContent = currentOption;
	renderButtons();
};

selectHeader(currentOption);
renderButtons();