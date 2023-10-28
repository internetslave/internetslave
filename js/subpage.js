const h2 = document.querySelector(".column>h2");
const container = document.querySelector(".subpage-btns");
const subpagePara = document.getElementById('para');

const options = ['Description', 'Justification', 'Lessons Learned', 'Goals'];

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
          "/reflection-subpages/lead-mentor.html": "Description text for cert.",
          "/reflection-subpages/code-dojo.html": "I introduced coding to the children by walking through printed Scratch worksheets. Most of them are self explanatory however, there were inevitebly questions but I was always there happy to help. In order to cater to the more advanced students who usually already had prior pre-existing knowledge; I used a whiteboard as a visual aid and demonstrated how the fundamental programming concepts embedded within Scratch translates into Python. I chose Python as it is a relatively easy programming language, and some of the more advanced students already had previous experience with it. This approach allowed me to challenge advanced students but also reinforce my own knowledge as teaching others is a good way to refresh and ensure that I understand the basics myself. I also created a friendly programming competition for all the students but it was tailored to test their own personal skills, so the more advanced students had harder questions and so on.",
          "/reflection-subpages/course-rep.html": "Description text for course.",
          "/reflection-subpages/grads4nottm.html": "Description text for grads.",
          "/reflection-subpages/it-support.html": "Description text for it.",
          "/reflection-subpages/library-mentor.html": "Description text for library.",
          "/reflection-subpages/achievement.html": "Description text for outreach.",
          "/reflection-subpages/this-website.html": "I have opinions I want to share and creating my own personal website is the perfect medium to do so. It is not a unique idea as having a portfolio website is a common project however, I do feel as though I have put my own personal twist on it. I think most of them contain a ton of generic content(hobbies etc.) and look rather identical to one another. Although visually speaking this website needs a ton of improvement I think content wise it stands out. ",
          "/reflection-subpages/trinity.html": "Description text for trinity.",

          "/tools-subpages/arch.html": "Description text for arch.",
          "/tools-subpages/graphene.html": "Description text for graph.",
          "/tools-subpages/monero.html": "Description text for xmr.",
          "/tools-subpages/pi-hole.html": "Description text for pi.",


        },
        "Justification": {
          "/reflection-subpages/lead-mentor.html": "Justification text for cert.",
          "/reflection-subpages/code-dojo.html": "It is imperative that the teaching of programming begins at an early age as it will be an undeniably useful skill for them to learn as technology continues to advance at rapid speeds. Additionally, free public spaces are extremely important especially to kids who are from disadvantaged backgrounds who otherwise would not have access to structured educational activities and support outside of school hours. They might not have a ton of stimulation at home, or it might not be an environment conducive to learning. The club not only acts as a safe space for them to relax and socialize but offers oppurtuinites for both academic growth as well as personal development to those who might not otherwise have access to it. The most rewarding part of the entire experience was when I got to chat to some of their parents who said that the children really enjoyed attending the club and would miss having me leading it. That comment was very touching, and it really reinforced that even though I might not teach children in the future; pedagogy in general is something I want to look into more in the future.",
          "/reflection-subpages/course-rep.html": "Justification text for course.",
          "/reflection-subpages/grads4nottm.html": "Justification text for grads.",
          "/reflection-subpages/it-support.html": "Justification text for it.",
          "/reflection-subpages/library-mentor.html": "Justification text for library.",
          "/reflection-subpages/achievement.html": "Justification text for outreach.",
          "/reflection-subpages/this-website.html": "A HTML / CSS page that merely states a brief introduction about me and lists a couple of hobbies feels stale, boring, and it has been done before. ChatGPT could automate a website for you using this format if you just enter in some basic details about yourself. Not everyone is willing to share aspects about themselves, but for me this is all I have to offer. It is like how people try to speed run getting to know each other through a quick game of 21 questions. As if that tells you anything about the person. Interrogation is quite different to willingly sharing aspects about yourself is two different things. All good things come with time, why would you want to rush the beautiful process of getting to know someone? Due to technology, people are conditioned to expect things to happen quickly, but I prefer a slower approach in my personal life.  ",
          "/reflection-subpages/trinity.html": "Justification text for trinity.",


          "/tools-subpages/arch.html": "Justification text for arch.",
          "/tools-subpages/graphene.html": "Justification text for graph.",
          "/tools-subpages/monero.html": "Justification text for xmr.",
          "/tools-subpages/pi-hole.html": "Justification text for pi.",

        },

        "Lessons Learned": {
          "/reflection-subpages/lead-mentor.html": "Lessons text for cert.",
          "/reflection-subpages/code-dojo.html": "When working with young children, a fundamental principle to uphold is the prioritization of fun above all else. This is particularly paramount, given that the young participants are voluntarily attending these educational sessions, possibly under some degree of parental encouragement or influence, but not mandated by any formal educational institution. In this non-academic setting, the emphasis on ensuring an enjoyable and engaging learning experience becomes all the more essential. By making learning enjoyable and exciting, we create an environment that not only sustains their interest but also fosters a genuine enthusiasm for the subject matter. Recognizing that these young learners have chosen to invest their time voluntarily, we acknowledge the importance of making their educational journey a source of delight, as this not only maximizes their retention of knowledge but also encourages them to continue explore programming. This is exactly why I attempt to make all the lessons extremely interactive and encourage them to befriend each other.",
          "/reflection-subpages/course-rep.html": "Lessons text for course.",
          "/reflection-subpages/grads4nottm.html": "Lessons text for grads.",
          "/reflection-subpages/it-support.html": "Lessons text for it.",
          "/reflection-subpages/library-mentor.html": "Lessons text for library.",
          "/reflection-subpages/achievement.html": "Lessons text for outreach.",
          "/reflection-subpages/this-website.html": "Don’t reinvent the wheel. I removed unnecessary line breaks that I had due to my own aesthetic preferences, but I realise I should just follow the standard coding convention for each language. I think of it now like grammar / standardized formatting (in like scientific academic papers) or something like that. This way it’s easily readable and looks identical to other code (in terms of formatting). Followed naming conventions as well.  Additionally, it took me too long to figure out to use inspect element on my own code to debug it, and to not just open the files locally and instead run a live server using a VSCODE extension.  ",
          "/reflection-subpages/trinity.html": "Lessons text for trinity.",


          "/tools-subpages/arch.html": "Lessons text for arch.",
          "/tools-subpages/graphene.html": "Lessons text for graph.",
          "/tools-subpages/monero.html": "Lessons text for xmr.",
          "/tools-subpages/pi-hole.html": "Lessons text for pi.",
        },

        "Goals": {
          "/reflection-subpages/lead-mentor.html": "Goals text for cert.",
          "/reflection-subpages/code-dojo.html": "Unfortunately I had to stop running this club as the commute is now too far away since I moved accomodation for second year. Additionally, with the new timetable there is too many conflicts and I cannot attend the regular scheduled time. However, through being a Lead Mentor I was introduced to another Lead mentor who was a final year who is running one for his final year project in Clifton so I am assisting him with that instead. I hope to introduce even more children to Python and create an actual clear enganging lesson plan demonstrating the transferable concepts from Scratch.",
          "/reflection-subpages/course-rep.html": "Goals text for course.",
          "/reflection-subpages/grads4nottm.html": "Goals text for grads.",
          "/reflection-subpages/it-support.html": "Goals text for it.",
          "/reflection-subpages/library-mentor.html": "Goals text for library.",
          "/reflection-subpages/achievement.html": "Goals text for outreach.",
          "/reflection-subpages/this-website.html": "I want to turn this website into a blog and not just have a bunch of long text inside flexboxes. I plan on doing so using the REACT framework in specific because it would allow me to create reusable self-contained chunks of code and I find that appealing. I was sort of building a SPA without a SPA framework which was very tedious – and that’s exactly what REACT was made for so in the future I want to learn REACT and redo not only that piece of code () but the entire website as I understand it’s quite clunky. There’s a lot of text and I believe I have a lot of good quality content however it’s not visually enganging enough so most will not read it. ",
          "/reflection-subpages/trinity.html": "Goals text for trinity.",


          "/tools-subpages/arch.html": "Goals text for arch.",
          "/tools-subpages/graphene.html": "Goals text for graph.",
          "/tools-subpages/monero.html": "Goals text for xmr.",
          "/tools-subpages/pi-hole.html": "Goals text for pi.",

        },

      };

      const pathName = Object.keys(sections[currentOption || "Description"]).find(path => location.pathname.endsWith(path));
      updatePara(sections[currentOption][pathName] || sections["Description"][pathName]);

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

/* SUBPAGE MODAL IMAGES */
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg"); // get img
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src; // insert img inside of modal 
  captionText.innerHTML = this.alt; // use alt text as caption
}

var span = document.getElementsByClassName("close")[0]; /* get span element(X) that closes modal*/

span.onclick = function () { /* when user clicks on x button close modal */
  modal.style.display = "none";
}