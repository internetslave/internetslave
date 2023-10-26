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